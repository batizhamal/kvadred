import './styles.scss';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaChevronLeft } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { HeaderItem } from '@app/providers';
import Chip from '../Chip';

interface Props {
  items: HeaderItem[];
}

const icons: { [key: string]: any } = {
  '/': <img src="/icons/home.svg" alt="Home" className="menu__icon" />,
  '/smeta': (
    <img src="/icons/bar-chart.svg" alt="Smeta" className="menu__icon" />
  ),
  '/team': <img src="/icons/users.svg" alt="Team" className="menu__icon" />,
  '/compare': (
    <img src="/icons/compare.svg" alt="Compare" className="menu__icon" />
  ),
};

function Menu(props: Props) {
  const { items } = props;
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={classNames('menu', { 'menu--collapsed': collapsed })}>
      <img
        src={'/bg_waves.jpg'}
        alt={'background'}
        className="menu__background"
      />
      <div className={'menu__wrapper'}>
        <div className={'logo-wrapper'}>
          {!collapsed && (
            <img
              src={'/logo.svg'}
              alt={'logo'}
              height={'64px'}
              className={'logo'}
            />
          )}
          <button type="button" className="menu__toggle" onClick={toggle}>
            {collapsed ? <FaBars /> : <FaChevronLeft />}
          </button>
        </div>
        <div className={'menu__items'}>
          {items
            .filter((item) => item.path !== '/contacts')
            .map((item, index) => (
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
                {!collapsed && item.label}
                {!collapsed && item.badge && (
                  <Chip color={'danger'} text={!collapsed && item.badge} />
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
