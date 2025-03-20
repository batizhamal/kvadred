import './styles.scss';
import { FaLink } from 'react-icons/fa6';

function Block3({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className={'block-3'}>
        {/*<div style={{ fontSize: '20px', marginTop: '20px' }}>ABEROY</div>*/}
        Участник
        <div className={'title'} style={{ marginTop: '8px' }}>
          STARTUP GARAGE
        </div>
        Astana Hub
        <div className={'block-3__circle'}>
          <img src={'/astanahub.png'} alt={'logo'} />
        </div>
        <div
          className={'block-3__circle--small'}
          onClick={() => {
            // window.open('https://wa.me/+77079883399', '_blank');
            window.open(
              'https://astanahub.com/en/l/StartupGarage2025',
              '_blank'
            );
          }}
        >
          {/*<FaWhatsapp fill={'#233454'} width={30} height={30} />*/}
          <FaLink width={20} height={20} fill={'#233454'} />
        </div>
      </div>
    </div>
  );
}

export default Block3;
