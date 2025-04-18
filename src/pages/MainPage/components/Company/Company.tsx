import './styles.scss';
import { Company as CompanyData } from '@app/api';
import { Typography } from '@app/components';
import { formatDigitsGrouping } from '../../../../common/utils/formattingUtils.ts';
import { FaInstagram } from 'react-icons/fa';
import Chip from '../../../../components/Chip';
import { FaWhatsapp } from 'react-icons/fa6';

interface Props {
  company: CompanyData;
  bestIn?: 'rating' | 'deadlines' | 'price';
  area: number;
}

function Company(props: Props) {
  const { company, bestIn, area } = props;

  const bestInText = {
    rating: 'Рейтинг',
    deadlines: 'Сроки',
    price: 'Цена',
  };

  return (
    // <div className={'company-card'}>
    //   <img src={'/empty.png'} height={48} alt={'logo'} />
    //   {/*TODO: logo*/}
    //   <Typography
    //     className={'kvadred-mt-8'}
    //     text={`${formatDigitsGrouping(company.price).toString()} ₸`}
    //   />
    //   <a className={'company-card__link'} href={company.IGlink}>
    //     <FaLink color={'#4598FF'} />
    //     Подробнее
    //   </a>
    //
    //   {/*{!!company.bestIn && (*/}
    //   {/*  <div className={'company-card__best-in kvadred-mt-8'}>*/}
    //   {/*    {company.bestIn === 'rating' && <FaChartLine color={'#D90429'} />}*/}
    //   {/*    {company.bestIn === 'deadlines' && (*/}
    //   {/*      <FaClockRotateLeft color={'#D90429'} />*/}
    //   {/*    )}*/}
    //   {/*    {company.bestIn === 'price' && <FaPercent color={'#D90429'} />}*/}
    //   {/*    {bestIn[company.bestIn]}*/}
    //   {/*  </div>*/}
    //   {/*)}*/}
    // </div>

    <div className={'company'}>
      <div className={'company__content'}>
        <div className={'company__logo'}>
          <img alt={'logo'} src={`/companies/${company._id}.png`} />
        </div>
        <div className={'company__title'}>
          <div className={'main'}>{company.name}</div>
          <Typography
            text={`${formatDigitsGrouping(company.price * area).toString()} ₸`}
          />
          <Typography
            variant={'secondary'}
            text={`${formatDigitsGrouping(company.price).toString()} ₸ / кв.м`}
          />
        </div>
      </div>
      <div className={'company__right-content'}>
        {!!bestIn && (
          <Chip
            text={bestInText[bestIn]}
            color={
              bestIn === 'price'
                ? 'danger'
                : bestIn === 'rating'
                  ? 'success'
                  : bestIn === 'deadlines'
                    ? 'warning'
                    : 'default'
            }
            variant={'outlined'}
          />
        )}
        <div className={'kvadred-flex kvadred-gap-4'}>
          <FaInstagram
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(company.IGlink, '_blank');
            }}
          />
          <FaWhatsapp
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(`https://wa.me/${company.phone}`, '_blank');
            }}
          />
        </div>
      </div>
      {/*{!!company.bestIn && (*/}
      {/*  <div className={'company-card__best-in kvadred-mt-8'}>*/}
      {/*    {company.bestIn === 'rating' && <FaChartLine color={'#D90429'} />}*/}
      {/*    {company.bestIn === 'deadlines' && (*/}
      {/*      <FaClockRotateLeft color={'#D90429'} />*/}
      {/*    )}*/}
      {/*    {company.bestIn === 'price' && <FaPercent color={'#D90429'} />}*/}
      {/*    {bestIn[company.bestIn]}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}

export default Company;
