export const Footer = () => {
  return (
    <footer className="footer" data-testid='footer'>
      <div className="container">
        <div className="footer-info">
          <div className="footer-grid">
            <div className="info-item">
              <h2 className="info-item__title">Контакт-центр</h2>
              <ul className="info-list">
                <li className="info-item__text">098 900 09 09</li>
                <li className="info-item__text">Пн - Пт 09:00 - 21:00</li>
                <li className="info-item__text">Пн - Пт 09:00 - 21:00</li>
              </ul>
            </div>
            <div className="info-item">
              <h2 className="info-item__title">Покупцям</h2>
              <ul className="info-list">
                <li className="info-item__text">Оплата і доставка</li>
                <li className="info-item__text">Повернення</li>
                <li className="info-item__text">Питання та відповіді</li>
              </ul>
            </div>
            <div className="info-item">
              <h2 className="info-item__title">Особистий кабінет</h2>
              <ul className="info-list">
                <li className="info-item__text">Мої дані</li>
                <li className="info-item__text">Історія замовлень</li>
                <li className="info-item__text">Улюблені</li>
                <li className="info-item__text">Розсилки</li>
              </ul>
            </div>
            <div className="info-item">
              <h2 className="info-item__title">Про компанію</h2>
              <ul className="info-list">
                <li className="info-item__text">Про нас</li>
                <li className="info-item__text">Новини</li>
                <li className="info-item__text">Стати партнером</li>
                <li className="info-item__text">Угода користувача</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <div className="footer-row">
            <div className="footer-menu-content">
              <nav className="footer-nav">
                <a href="#" className="footer-nav__link" role="link">
                  НОВИНКИ
                </a>
                <a href="#" className="footer-nav__link" role="link">
                  ЧОЛОВІКИ
                </a>
                <a href="#" className="footer-nav__link" role="link">
                  ЖІНКИ
                </a>
                <a href="#" className="footer-nav__link" role="link">
                  АКСЕСУАРИ
                </a>
                <a href="#" className="footer-nav__link" role="link">
                  АКЦІЇ
                </a>
              </nav>
              <div className="footer-rights">
                <p className="footer-rights__text">
                  © 2022 — 2023 IGNAT. Усі права захищені.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
