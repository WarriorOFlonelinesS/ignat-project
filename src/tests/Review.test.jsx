import React from "react";
import { render, screen } from "@testing-library/react";
import { Review } from "../components/Review";

describe("Review component", () => {
  const reviewData = {
    image: "/path/to/image.jpg",
    subtitle: "Subtitle",
    text: "Review text",
  };

  it("renders correctly", () => {
    render(<Review data={reviewData} />);

  
    expect(screen.getByTestId("review")).toBeInTheDocument();

    const image = screen.getByTestId("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", reviewData.image);
  
    expect(screen.getByText(reviewData.subtitle)).toBeInTheDocument();

    expect(screen.getByText(reviewData.text)).toBeInTheDocument();
  });
});
