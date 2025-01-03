import './styles.scss';

function Landing() {
  return (
    <>
      <div className="landing-body">
        <div className="landing-header">
          <div className="header-logo">ЛОГО</div>
          <button className="header-button">Связаться с нами</button>
        </div>

        <section className="hero">
          <p>ТУТ БУДЕТ КРАТКОЕ ОПИСАНИЕ СТАРТАПА</p>
          <h1>ТУТ БУДЕТ КАЙНДА МИССИЯ СТАРТАПА ИЛИ ЦЕННОСТЬ. ХЗ</h1>
          <button className="cta-button">CTA BUTTON</button>
        </section>

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
