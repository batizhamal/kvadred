import './styles.scss';
import {HeaderItem} from "@app/hooks";
import classNames from "classnames";
import {Link, useLocation} from "react-router-dom";
import Button from '../Button';

interface Props {
  items: HeaderItem[];
}

function Header(props: Props) {
  const {
    items,
  } = props;
  const location = useLocation();

  return (
    <div className={'header'}>
      <img src={'/logo_black.svg'} height={64} alt={'logo'}/>
      <Button
        label='Связаться с нами'
        variant='contained'
        color='primary'
        onClick={
          () => {
            // TODO
          }
        }
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
