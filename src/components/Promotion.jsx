export const Promotion = () => {
  return (
    <div className="main-promotion" data-testid="promotion">
      <div className="promotion-content">
        <div className="promotion__line" />
        <div className="promotion__title">Спіймай всі акції!</div>
        <div className="promotion__text">
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з`влятись у нашому магазині. А у нас їх багато :D
        </div>
        <div className="promotion-form">
          <input
            type="email"
            className="promotion-form__input"
            placeholder="ВВЕДІТЬ"
          />
          <button className="promotion-form__btn">ПІДПИСАТИСЬ</button>
        </div>
      </div>
    </div>
  );
};
