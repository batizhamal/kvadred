import './styles.scss';
import { Button, Header } from '@app/components';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { useHeader } from '@app/hooks';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6';

function Landing() {
  const navigate = useNavigate();
  const { routes } = useHeader();

  const goToSmeta = () => {
    navigate('/smeta');
  };

  return (
    <>
      <div className="landing-body">
        <div className={'landing-main-wrapper'}>
          <img
            src={'/bg_waves.jpg'}
            alt={'background'}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
          <Header items={routes} className={'landing-header'} />

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
                  onClick={goToSmeta}
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

        <div className="landing-companies">
          <div className={'landing-companies__header'}>
            <div className={'landing-companies__title'}>
              30+ строительных компаний
            </div>
            <div className={'landing-companies__subtitle'}>
              Которые готовы вам помочь с ремонтом
            </div>
          </div>
          <div className={'landing-companies__block-container'}>
            <div className={'landing-companies__block'}>2М+</div>
            <div className={'landing-companies__block'}>30%</div>
            <div className={'landing-companies__block'}>5М ₸</div>
          </div>
        </div>

        <div className={'landing-footer'}>
          <div className={'landing-divider kvadred-mb-48'}></div>
          <div className={'landing-footer__layout'}>
            <span>Kvadred 2025</span>
            <span className={'landing-footer__terms'}>Условия и положения</span>
            <div className={'landing-footer__social-wrapper'}>
              <div
                className={'landing-footer__social-item'}
                onClick={() => {
                  window.open('https://wa.me/+77000780088', '_blank');
                }}
              >
                <FaWhatsapp />
              </div>
              <div
                className={'landing-footer__social-item'}
                onClick={() => {
                  window.open('https://www.instagram.com/kvadred.kz', '_blank');
                }}
              >
                <FaInstagram />
              </div>
              <div className={'landing-footer__social-item'}>
                <FaTelegram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
