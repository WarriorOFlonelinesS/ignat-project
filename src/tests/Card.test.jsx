import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

describe("Card component", () => {
  const testData = {
    image: "/path/to/image.jpg",
    subtitle: "Subtitle",
    text: "Description text",
    price: "1099 грн.",
  };

  it("renders correctly", () => {
    render(<Card data={testData} />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument(); 
    expect(screen.getByText(testData.subtitle)).toBeInTheDocument(); 
    expect(screen.getByText(testData.text)).toBeInTheDocument(); 
    expect(screen.getByText(testData.price)).toBeInTheDocument(); 
  });
});
