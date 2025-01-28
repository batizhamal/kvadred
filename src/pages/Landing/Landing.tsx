import './styles.scss';
import { Button, Header } from '@app/components';
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { useHeader } from '@app/hooks';
import { FaArrowRight, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

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
                Генерация сметы для ремонта, поиск и сравнение строительных
                компаний
              </div>
              <div className={'landing-hero__title'}>
                KVADRED — быстрый и удобный старт ремонта
              </div>
              <div className={'kvadred-flex'}>
                <Button
                  text={'Начать'}
                  className={'landing-button'}
                  onClick={goToSmeta}
                  postIcon={FaArrowRight}
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
                onClick={() => {
                  window.open('https://wa.me/+77079883399', '_blank');
                }}
              >
                <FaWhatsapp fill={'#233454'} width={30} height={30} />
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
                3 причины, почему 85% пользователей выбирают Kvadred
              </div>
            </div>
            <div className={'landing-stats__block-container'}>
              <div className={'landing-stats__block'}>
                <div className={'title'}>Точная смета за 2 клика</div>
                <div className={'subtitle'}>
                  получите подробный расчет стоимости материалов и сроков
                  ремонта без регистрации
                </div>
                <div className={'img-wrapper'}>
                  <img src={'/stats1.png'} alt={'stats1'} width={120} />
                </div>
              </div>
              <div className={'landing-stats__block'}>
                <div className={'title'}>10+ предложений от компаний</div>
                <div className={'subtitle'}>
                  сравните цены, сроки и условия ремонта от проверенных
                  специалистов в вашем регионе
                </div>
                <div className={'img-wrapper'}>
                  <img src={'/stats2.png'} alt={'stats1'} width={120} />
                </div>
              </div>
              <div className={'landing-stats__block'}>
                <div className={'title'}>1 заявка вместо 10 звонков</div>
                <div className={'subtitle'}>
                  отправьте запрос всем компаниям или выберите конкретную всего
                  одним нажатием
                </div>
                <div className={'img-wrapper'}>
                  <img src={'/stats3.png'} alt={'stats1'} width={140} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-features">
          <div className={'landing-features__header'}>
            <div className={'landing-features__subtitle'}>
              Как это работает?
            </div>
            <div className={'landing-features__title'}>
              Мы упрощаем процесс ремонта. Всё необходимое — в одном месте.
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--blue'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>1. Подробная смета за секунды</div>
              Получите детальный расчет стоимости ремонта с разбивкой по
              материалам, работам и срокам выполнения
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen1.png'} alt={'screen1'} />
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--yellow'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>2. Сравнение компаний по цене</div>
              Выбирайте проверенных подрядчиков с лучшим соотношением цены и
              качества — сортировка по стоимости за квадратный метр
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen2.png'} alt={'screen1'} />
            </div>
          </div>
          <div
            className={
              'landing-features__feature landing-features__feature--blue'
            }
          >
            <div className={'landing-features__feature--left'}>
              <div className={'title'}>3. Сроки и структура затрат</div>
              Понимайте, сколько времени займет ремонт на каждом этапе и какой
              процент бюджета уходит на разные виды работ
            </div>
            <div className={'landing-features__feature--right'}>
              <img src={'/screen1.jpg'} alt={'screen3'} />
            </div>
          </div>
        </div>

        {/*<div className="landing-companies">*/}
        {/*  <div className={'landing-companies__header'}>*/}
        {/*    <div className={'landing-companies__title'}>*/}
        {/*      30+ строительных компаний*/}
        {/*    </div>*/}
        {/*    <div className={'landing-companies__subtitle'}>*/}
        {/*      Которые готовы вам помочь с ремонтом*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={'landing-companies__block-container'}>*/}
        {/*    <div className={'landing-companies__block'}>2М+</div>*/}
        {/*    <div className={'landing-companies__block'}>30%</div>*/}
        {/*    <div className={'landing-companies__block'}>5М ₸</div>*/}
        {/*  </div>*/}
        {/*</div>*/}

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
