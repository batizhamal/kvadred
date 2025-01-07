import './styles.scss';
import { HeaderItem } from '@app/hooks';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FaCalculator, FaHome, FaPhoneAlt } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

interface Props {
  items: HeaderItem[];
}

const icons: { [key: string]: any } = {
  '/': <FaHome />,
  '/smeta': <FaCalculator />,
  '/team': <FaPeopleGroup />,
  '/contacts': <FaPhoneAlt />,
};

function Menu(props: Props) {
  const { items } = props;
  const location = useLocation();

  return (
    <div className={'menu'}>
      <div className={'menu__wrapper'}>
        <img src={'/logo.svg'} alt={'logo'} height={'64px'} />
        <div className={'menu__items'}>
          {items.map((item, index) => (
            <Link
              to={item.path}
              key={`item-${index}`}
              className={classNames('menu__item', {
                'menu__item--selected':
                  location.pathname.substring(1).split('/')[0] ===
                  item.path.substring(1).split('/')[0].toLocaleLowerCase(),
              })}
            >
              {icons[item.path]}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={'menu__footer'}>
        <div className={'menu__item'}>
          <FaPhoneAlt />
          Контакты
        </div>
      </div>
    </div>
  );
}

export default Menu;
