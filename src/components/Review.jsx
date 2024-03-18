import rating from '../images/rating.svg'
export const Review = ({ data }) => {
  return (
    <div className="review" data-testid='review'>
      <div className="review-person">
        <div className="person-left">
          <img className="review__img" src={data.image} data-testid='img'/>
        </div>
        <div className="person-right">
          <img className="review__rating" src={rating} />
          <p className="review__subtitle">{data.subtitle} </p>
        </div>
      </div>
      <p className="review__text">{data.text}</p>
    </div>
  );
};
