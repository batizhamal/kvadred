import './styles.scss';
import { HeaderItem } from '@app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';

interface Props {
  items: HeaderItem[];
}

function Header(props: Props) {
  const { items } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const goToLanding = () => {
    navigate('/landing');
  };

  return (
    <div className={'header'}>
      <img
        src={'/logo_black.svg'}
        height={64}
        alt={'logo'}
        onClick={goToLanding}
      />
      <Button
        text="Связаться с нами"
        variant="contained"
        color="primary"
        onClick={() => {
          // TODO
        }}
      />
      {/* <div className={'header__items'}>
        {items.map(item => (
          <Link
            to={item.path}
            key={item.path}
            className={
              classNames('header__item', {
                'header__item--current': location.pathname.substring(1).split('/')[0] ===
                  item.path.substring(1).split('/')[0].toLocaleLowerCase(),
              })
            }
          >
            {item.label.toUpperCase()}
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default Header;
