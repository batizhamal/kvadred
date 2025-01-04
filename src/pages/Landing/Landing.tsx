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
            width: '100%',
            height: '150vh',
            zIndex: 1,
          }}
        />
        <div className={'landing-main-wrapper'}>
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
                <div style={{ fontSize: '20px', marginTop: '20px' }}>
                  ABEROY
                </div>
                строительная компания
                <div className={'title'} style={{ marginTop: '8px' }}>
                  200+ проектов
                </div>
              </div>
              <div className={'landing-hero__floating-block block-3__circle'}>
                <img src={'/aberoy.svg'} alt={'logo'} />
              </div>
              <div
                className={
                  'landing-hero__floating-block block-3__circle--small'
                }
              >
                <FaPhoneAlt fill={'#233454'} />
              </div>
              <div className={'landing-hero__floating-block block-4'}></div>
            </div>
          </div>

          <div className="landing-stats">
            <div className={'landing-stats__header'}>
              <div className={'landing-stats__subtitle'}>
                Особенности платформы KVADRED
              </div>
              <div className={'landing-stats__title'}>
                Данные 1000+ проектов и лучшие практики
              </div>
            </div>
            <div className={'landing-stats__block-container'}>
              <div className={'landing-stats__block'}></div>
              <div className={'landing-stats__block'}></div>
              <div className={'landing-stats__block'}></div>
            </div>
          </div>
        </div>
        <div className="landing-features">
          <div className={'landing-features__header'}>
            <div className={'landing-features__subtitle'}>
              Смари как это круто работает
            </div>
            <div className={'landing-features__title'}>
              Тут слоган про то как квадред решает гемор по ремонту
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--blue'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>1. Заголовок первой крутости</div>
              описание круто как тут
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen1.jpg'} alt={'screen1'} />
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--yellow'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>2. Заголовок второй крутости</div>
              описание круто как тут
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen1.jpg'} alt={'screen1'} />
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--blue'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>3. Заголовок третьей крутости</div>
              описание круто как тут
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen1.jpg'} alt={'screen1'} />
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>30+ строительных компаний</p>
          <p>Которые готовы вам помочь с ремонтом</p>
        </footer>
      </div>
    </>
  );
}

export default Landing;
