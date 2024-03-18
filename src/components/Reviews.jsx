import { Review } from "./Review";
import { reviews } from "../data";
import { useState } from "react";
export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(reviews.length / 4);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < reviews.length ? prevIndex + 4 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : reviews.length - 4
    );
  };

  return (
    <div className="reviews" data-testid="reviews">
      <div className="reviews-content">
        <div className="reviews-up">
          <h3 className="reviews__title">Відгуки від наших клієнтів</h3>
          <p className="reviews__counter">{`${
            currentIndex / 4 + 1
          }/${totalPages}`}</p>
          <div className="reviews-buttons">
            <button
              className="goods-button goods-button_left"
              onClick={prevSlide}
              data-testid="leftBtn"
            ></button>
            <button
              className="goods-button goods-button_right"
              onClick={nextSlide}
              data-testid="rightBtn"
            ></button>
          </div>
        </div>
        <div className="reviews-cards">
        {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
            <Review key={index} data={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
