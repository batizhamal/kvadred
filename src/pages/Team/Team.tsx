import './styles.scss';
import { LayoutDefault } from '@app/layout';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

function Team() {
  return (
    <LayoutDefault scrollable>
      <div className="team">
        <div className={'team__header'}>
          {/*<div className={'team__subtitle'}>Машины KVADRED</div>*/}
          {/*<div className={'team__title'}>Команда профессионалов</div>*/}
          <div className={'team__title'}>Машины KVADRED</div>
        </div>
        <div className={'team__block-container'}>
          <div className={'team__block'}>
            <div className={'frame'}>
              <img src={'/isco.jpg'} alt={'isco'} />
            </div>
            <div className={'title'}>Искандер Темирлан</div>
            <div className={'subtitle'}>Co-Founder, CEO</div>
            <div className={'contacts'}>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/instakhram?igsh=czF6OTJ4cW41M244',
                    '_blank'
                  );
                }}
              >
                <FaInstagram />
              </div>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/iskandertemirlan/',
                    '_blank'
                  );
                }}
              >
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className={'team__block'}>
            <div className={'frame'}>
              <img src={'/aza.png'} alt={'isco'} />
            </div>
            <div className={'title'}>Азат Мукушев</div>
            <div className={'subtitle'}>Co-Founder, CTO</div>
            <div className={'contacts'}>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/serikovskii?igsh=MTBubTNtbDdsczU5ZA==',
                    '_blank'
                  );
                }}
              >
                <FaInstagram />
              </div>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/azat-mukushev-522675244/',
                    '_blank'
                  );
                }}
              >
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className={'team__block'}>
            <div className={'frame'}>
              <img src={'/bati.jpg'} alt={'isco'} />
            </div>
            <div className={'title'}>Батижамал Рауия</div>
            <div className={'subtitle'}>Frontend developer</div>
            <div className={'contacts'}>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/batizhamal/',
                    '_blank'
                  );
                }}
              >
                <FaInstagram />
              </div>
              <div
                className={'contact'}
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/batizhamal-rauiya-7368061b1/',
                    '_blank'
                  );
                }}
              >
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className={'mission'}>
          <div className={'mission__title'}>Миссия стартапа</div>
          <span>
            Мы создаем цифровую экосистему для ремонтных компаний, где они могут
            управлять проектами, рассчитывать сметы и находить клиентов без
            хаоса в чатах и таблицах.
          </span>
          <span>
            Наша цель — сделать рынок ремонта прозрачным и удобным как для
            подрядчиков, так и для заказчиков.
          </span>
        </div>
        <div className={'contacts-block'}>
          <div className={'contacts-block__title'}>Контакты</div>
          <div className={'phone-number'}>Номер телефона: +7 700 078 0088</div>
          <div className={'socials'}>
            <div
              className={'socials__item'}
              onClick={() => {
                window.open('https://wa.me/+77000780088', '_blank');
              }}
            >
              <FaWhatsapp />
            </div>
            <div
              className={'socials__item'}
              onClick={() => {
                window.open('https://www.instagram.com/kvadred.kz', '_blank');
              }}
            >
              <FaInstagram />
            </div>
            {/*<div className={'landing-footer__social-item'}>*/}
            {/*  <FaTelegram />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}

export default Team;
