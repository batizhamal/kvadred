import './styles.scss';
import { LayoutDefault } from '@app/layout';

function Team() {
  return (
    <LayoutDefault>
      <div className="team">
        <div className={'team__header'}>
          <div className={'team__subtitle'}>Машины KVADRED</div>
          <div className={'team__title'}>Команда профессионалов</div>
        </div>
        <div className={'team__block-container'}>
          <div className={'team__block'}>
            <div className={'frame'}></div>
          </div>
          <div className={'team__block'}></div>
          <div className={'team__block'}></div>
        </div>
      </div>
    </LayoutDefault>
  );
}

export default Team;
