
import { render, screen, fireEvent } from "@testing-library/react";
import { Slider } from "../components/Slider";

describe("Slider", () => {
  it("renders without crashing", () => {
    render(<Slider />);
  });

  it("displays the current slide correctly", () => {
    render(<Slider />);
    const currentSlide = screen.getByTestId("slide");
    expect(currentSlide).toBeInTheDocument();
  });

  it("displays left arrow button", () => {
    render(<Slider />);
    const leftArrowButton = screen.getByTestId("left");
    expect(leftArrowButton).toBeInTheDocument();
  });

  it("displays right arrow button", () => {
    render(<Slider />);
    const rightArrowButton = screen.getByTestId("right");
    expect(rightArrowButton).toBeInTheDocument();
  });

  it("slides to the next slide when clicking the right arrow button", () => {
    render(<Slider />);
    const initialSlideContent = screen.getByTestId("slide").textContent;
    fireEvent.click(screen.getByTestId("right"));
    const nextSlideContent = screen.getByTestId("slide").textContent;
    expect(initialSlideContent).not.toBe(nextSlideContent);
  });

  it("slides to the previous slide when clicking the left arrow button", () => {
    render(<Slider />);
    const initialSlideContent = screen.getByTestId("slide").textContent;
    fireEvent.click(screen.getByTestId("right"));
    const previousSlideContent = screen.getByTestId("slide").textContent;
    expect(initialSlideContent).not.toBe(previousSlideContent);
  });

  it("updates slide index when clicking on indicator", () => {
    render(<Slider />);
    

    fireEvent.click(screen.getByTestId("indicator-1"));
    
    const slide = screen.getByTestId("slide");
   
    expect(slide.textContent).toMatch(/dolor ipsum loremРазом з NikeЗнижк/i);
  });
});
