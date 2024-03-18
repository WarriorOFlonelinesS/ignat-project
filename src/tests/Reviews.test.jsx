import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Reviews } from "../components/Reviews";

describe("Reviews component", () => {
  it("renders correctly", () => {
    render(<Reviews />);


    expect(screen.getByTestId(/reviews/i)).toBeInTheDocument();

    expect(screen.getByText(/відгуки від наших клієнтів/i)).toBeInTheDocument();

    expect(screen.getByTestId(/leftBtn/i)).toBeInTheDocument();
    expect(screen.getByTestId(/rightBtn/i)).toBeInTheDocument();
  });

  it("correctly switches between slides", () => {
    render(<Reviews />);


    fireEvent.click(screen.getByTestId(/rightBtn/i));
    fireEvent.click(screen.getByTestId(/rightBtn/i));

    expect(screen.getByText(/1\/2/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId(/leftBtn/i));

    expect(screen.getByText(/2\/2/i)).toBeInTheDocument();
  });
});
