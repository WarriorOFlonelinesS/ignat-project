export const Card = ({ data }) => {
  return (
    <div className="card" data-testid='card'>
      <img className="card__img" src={data.image} alt="" />
      <div className="round">
        <div className="header-favorite"></div>
      </div>
      <p className="card__subtitle">{data.subtitle}</p>
      <p className="card__text">{data.text}</p>
      <p className="card__subtext">{data.subtext}</p>
      <p className="card__price">{data.price}</p>
    </div>
  );
};
