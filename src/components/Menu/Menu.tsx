import './styles.scss';
import { HeaderItem } from '@app/hooks';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FaCalculator, FaHome, FaPhoneAlt } from 'react-icons/fa';
import { FaBars, FaChevronLeft, FaPeopleGroup } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

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
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classNames('menu', { 'menu--collapsed': collapsed })}>
      <button className="menu__toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <FaBars /> : <FaChevronLeft />}
      </button>
      <img
        src={'/bg_waves.jpg'}
        alt={'background'}
        className="menu__background"
      />
      <div className={'menu__wrapper'}>
        {!collapsed && <img src={'/logo.svg'} alt={'logo'} height={'64px'} />}
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
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
