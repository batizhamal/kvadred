import './styles.scss';

function Block1({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className={'block-1'}>
        <div className={'title'}>100+</div>
        планировок квартир астаны
        <div className={'block-1__circle'}>
          <img src={'/keys.png'} alt={'logo'} />
        </div>
      </div>
    </div>
  );
}

export default Block1;
