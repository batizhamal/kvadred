import './styles.scss';
import { Company as CompanyData } from '@app/api';
import { Typography } from '@app/components';
import { formatDigitsGrouping } from '../../../../common/utils/formattingUtils.ts';
import { FaChartLine, FaLink, FaPercent } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';

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
    <div className={'company-card'}>
      <img src={company.logo} height={48} alt={'logo'} />
      <Typography
        className={'kvadred-mt-8'}
        text={`${formatDigitsGrouping(company.price).toString()} ₸`}
      />
      <a className={'company-card__link'} href={company.link}>
        <FaLink color={'#4598FF'} />
        Подробнее
      </a>

      {!!company.bestIn && (
        <div className={'company-card__best-in kvadred-mt-8'}>
          {company.bestIn === 'rating' && <FaChartLine color={'#D90429'} />}
          {company.bestIn === 'deadlines' && (
            <FaClockRotateLeft color={'#D90429'} />
          )}
          {company.bestIn === 'price' && <FaPercent color={'#D90429'} />}
          {bestIn[company.bestIn]}
        </div>
      )}
    </div>
  );
}

export default Company;
