export const Header = () => {
  return (
    <>
      <header className="header" data-testid="header">
        <div className="container">
          <div className="help-row">
            <div className="header-help">
              <div className="help-content">
                <p className="header-help__number">098 900 09 09</p>
                <p className="header-help__text">Допомога</p>
              </div>
              <div className="header-login">
                <a href="#" className="header-login__link">
                  Увійти / Зареєструватися
                </a>
              </div>
            </div>
          </div>
          <div className="menu-row">
            <div className="header-menu">
              <div className="header__logo"></div>
              <nav className="header-nav">
                <a href="#" className="header-nav__link">
                  НОВИНКИ
                </a>
                <a href="#" className="header-nav__link">
                  ЧОЛОВІКИ
                </a>
                <a href="#" className="header-nav__link">
                  ЖІНКИ
                </a>
                <a href="#" className="header-nav__link">
                  АКСЕСУАРИ
                </a>
                <a href="#" className="header-nav__link">
                  АКЦІЇ
                </a>
              </nav>
              <div className="header-panel">
                <form action="#" className="header-search" role="searchbox">
                  <div className="header-search__button"></div>
                  <input type="text" className="header-search__input" />
                </form>
                <div
                  className="header-favorite"
                  role="button"
                  aria-label="Улюблене"
                >
                  
                </div>
                <div
                  className="header-cart"
                  role="button"
                  aria-label="Кошик"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
