import man from '../images/man.svg'

export const Present = () => {
  return (
    <div className="main-present" data-testid="present">
      <div className="present-content">
        <div className="present-left">
          <h1 className="present__title">
            Ми знаємо, що сподобається вашим “великим” друзям!
          </h1>
          <p className="present__text">
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”
          </p>
          <button className="present__btn">До каталогу</button>
        </div>
        <div className="present-right">
          <img src={man} className="present__img" alt="" />
        </div>
      </div>
    </div>
  );
};
