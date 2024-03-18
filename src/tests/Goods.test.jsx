
import { fireEvent, render, screen } from "@testing-library/react";
import { Goods } from "../components/Goods";

describe("Goods", () => {
  it("displays correct page number", () => {
    render(<Goods />);


    expect(screen.getByText(/1\/\d+/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("rightBtn"));

   
    expect(screen.getByText(/2\/\d+/i)).toBeInTheDocument();


    fireEvent.click(screen.getByTestId("leftBtn"));


    expect(screen.getByText(/1\/\d+/i)).toBeInTheDocument();
  });
});
