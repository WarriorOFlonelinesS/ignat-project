
import { render, screen } from "@testing-library/react";
import { Slide } from "../components/Slide";

describe("Slide", () => {
  const slideData = {
    image: "url/to/image.jpg",
    title: "Slide Title",
    subtitle: "Slide Subtitle",
    text: "Slide Text",
    subtext: "Slide Subtext"
  };

  it("renders without crashing", () => {
    render(<Slide data={slideData} />);
  });

  it("displays correct title", () => {
    render(<Slide data={slideData} />);
    expect(screen.getByText("Slide Title")).toBeInTheDocument();
  });

  it("displays correct subtitle", () => {
    render(<Slide data={slideData} />);
    expect(screen.getByText("Slide Subtitle")).toBeInTheDocument();
  });

  it("displays correct text", () => {
    render(<Slide data={slideData} />);
    expect(screen.getByText("Slide Text")).toBeInTheDocument();
  });

  it("displays correct subtext", () => {
    render(<Slide data={slideData} />);
    expect(screen.getByText("Slide Subtext")).toBeInTheDocument();
  });
});
