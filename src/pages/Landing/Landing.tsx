import './styles.scss';
import { Button } from '@app/components';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

function Landing() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <>
      <div className="landing-body">
        <img
          src={'/back_lines.png'}
          alt={'background'}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
          }}
        />
        <div className="landing-header">
          <img
            src={'/logo_white.png'}
            height={64}
            alt={'logo'}
            onClick={goToMain}
          />
          <Button text={'Связаться с нами'} className={'landing-button'} />
        </div>

        <div className="landing-hero">
          <div className={'landing-hero__left'}>
            <div className={'landing-hero__subtitle'}>
              Тут будет краткое описание стартапа
            </div>
            <div className={'landing-hero__title'}>
              ТУТ БУДЕТ КАЙНДА МИССИЯ СТАРТАПА ИЛИ ЦЕННОСТЬ. ХЗ
            </div>
            <div className={'kvadred-flex'}>
              <Button
                text={'Смета'}
                className={'landing-button'}
                onClick={goToMain}
              />
            </div>
          </div>
          <div className={'landing-hero__right'}>
            <div className={'landing-hero__floating-block block-1'}>
              <div className={'title'}>100+</div>
              планировок квартир астаны
            </div>
            <div className={'landing-hero__floating-block block-1__circle'}>
              <img src={'/keys.png'} alt={'logo'} />
            </div>
            <div className={'landing-hero__floating-block block-2'}></div>
            <div className={'landing-hero__floating-block block-3'}>
              <div style={{ fontSize: '20px', marginTop: '20px' }}>ABEROY</div>
              строительная компания
              <div className={'title'} style={{ marginTop: '8px' }}>
                200+ проектов
              </div>
            </div>
            <div className={'landing-hero__floating-block block-3__circle'}>
              <img src={'/aberoy.svg'} alt={'logo'} />
            </div>
            <div
              className={'landing-hero__floating-block block-3__circle--small'}
            >
              <FaPhoneAlt fill={'#233454'} />
            </div>
            <div className={'landing-hero__floating-block block-4'}></div>
          </div>
        </div>

        <section className="stats">
          <div>
            <h2>100+</h2>
            <p>Планировок квартир доступно</p>
          </div>
          <div>
            <h2>200+</h2>
            <p>Проектов</p>
          </div>
        </section>

        <section className="features">
          <h2>ТУТ СПОГАН ПРО ТО КАК КВАДРЕД РЕШАЕТ ГЕМОР ПО РЕМОНТУ</h2>
          <div className="feature">
            <h3>1. Заголовок первой крутости</h3>
            <p>Описание круто как тут</p>
          </div>
          <div className="feature">
            <h3>2. Заголовок второй крутости</h3>
            <p>Описание круто как тут</p>
          </div>
          <div className="feature">
            <h3>3. Заголовок третьей крутости</h3>
            <p>Описание круто как тут</p>
          </div>
        </section>

        <footer className="footer">
          <p>30+ строительных компаний</p>
          <p>Которые готовы вам помочь с ремонтом</p>
        </footer>
      </div>
    </>
  );
}

export default Landing;
