import { Slide } from "./Slide";
import { slides } from "../data";
import { useState } from "react";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-slider" data-testid="slider" >
      <div className="slider-buttons">
        <button data-testid='left' className="slider__arrow_left" onClick={prevSlide}></button>
        <button data-testid='right' className="slider__arrow_right" onClick={nextSlide}></button>
      </div>
      <Slide data={slides[currentIndex]} />
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <div onClick={()=>setCurrentIndex(index)}
          data-testid={`indicator-${index}`}
            key={index}
            className={`slider__indicator ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );

};
