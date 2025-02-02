import './styles.scss';
import { FaWhatsapp } from 'react-icons/fa6';

function Block3({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className={'block-3'}>
        <div style={{ fontSize: '20px', marginTop: '20px' }}>ABEROY</div>
        строительная компания
        <div className={'title'} style={{ marginTop: '8px' }}>
          200+ проектов
        </div>
        <div className={'block-3__circle'}>
          <img src={'/aberoy.svg'} alt={'logo'} />
        </div>
        <div
          className={'block-3__circle--small'}
          onClick={() => {
            window.open('https://wa.me/+77079883399', '_blank');
          }}
        >
          <FaWhatsapp fill={'#233454'} width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default Block3;
