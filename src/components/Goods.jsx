import React, { useState } from "react";
import { Card } from "./Card";
import { cards } from "../data";

export const Goods = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(cards.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < cards.length ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : cards.length - 3
    );
  };

  return (
    <div className="goods" data-testid="goods">
      <div className="goods-content">
        <div className="goods-up">
          <h3 className="goods__title">Найгарячіші товари</h3>
          <p className="goods__counter">{`${
            currentIndex / 3 + 1
          }/${totalPages}`}</p>
          <div className="goods-buttons">
            <button
              className="goods-button goods-button_left"
              onClick={prevSlide}
              data-testid='leftBtn'
            ></button>
            <button
              className="goods-button goods-button_right"
              onClick={nextSlide}
              data-testid='rightBtn'
            ></button>
          </div>
        </div>
        <div className="goods-cards">
          {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
