import './styles.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { HeaderItem } from '../../providers/HeaderProvider.tsx';

interface Props {
  items: HeaderItem[];
  className?: string;
}

function Header(props: Props) {
  const { items, className = '' } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const [showSmallNavigation, setShowSmallNavigation] = useState(false);

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className={`header ${className}`}>
      <img src={'/logo.svg'} height={64} alt={'logo'} onClick={goToMain} />
      <div className={'header__wrapper'}>
        <div className={'header__items'}>
          {items
            .filter((item) => item.path !== '/contacts')
            .map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={classNames('header__item', {
                  'header__item--current':
                    location.pathname.substring(1).split('/')[0] ===
                    item.path.substring(1).split('/')[0].toLocaleLowerCase(),
                })}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
        </div>
        <div
          className={'header__items-small'}
          onClick={() => {
            setShowSmallNavigation(!showSmallNavigation);
          }}
        >
          <div className={'header__item'}>Главная</div>
          <FaChevronDown fill={'#FFF48B'} />

          {showSmallNavigation && (
            <div className={'header__items-small-dropdown'}>
              {items
                .filter((item) => item.path !== '/contacts')
                .map((item) => (
                  <Link
                    to={item.path}
                    key={item.path}
                    className={classNames('header__item', {
                      'header__item--current':
                        location.pathname.substring(1).split('/')[0] ===
                        item.path
                          .substring(1)
                          .split('/')[0]
                          .toLocaleLowerCase(),
                    })}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                ))}
            </div>
          )}
        </div>
        <Button
          text="Связаться с нами"
          className={'header__button'}
          onClick={() => {
            window.open('https://wa.me/+77000780088', '_blank');
          }}
        />
      </div>
    </div>
  );
}

export default Header;
