import './styles.scss';
import { Company as CompanyData } from '@app/api';
import { Typography } from '@app/components';
import { formatDigitsGrouping } from '../../../../common/utils/formattingUtils.ts';
import { FaInstagram } from 'react-icons/fa';

interface Props {
  company: CompanyData;
}

function Company(props: Props) {
  const { company } = props;

  const bestIn = {
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
        <div className={'company__logo'}></div>
        {/*TODO: logo*/}
        <div className={'company__title'}>
          <div className={'main'}>{company.name}</div>
          <Typography
            text={`${formatDigitsGrouping(company.price).toString()} ₸`}
          />
          <Typography variant={'secondary'} text={'100 000 ₸ / кв.м'} />
        </div>
      </div>
      <a className={'company-card__link'} href={company.IGlink}>
        <FaInstagram color={'#4598FF'} />
        Instagram
      </a>
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
