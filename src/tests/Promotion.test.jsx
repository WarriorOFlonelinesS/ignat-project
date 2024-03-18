import { render, screen } from "@testing-library/react";
import { Promotion } from "../components/Promotion";

describe("Promotion component", () => {
  it("renders correctly", () => {
    render(<Promotion />);

    expect(screen.getByTestId("promotion")).toBeInTheDocument();

  
    expect(screen.getByText(/Спіймай всі акції!/i)).toBeInTheDocument();
    expect(screen.getByText(/Підписуйся на Email розсилку/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ВВЕДІТЬ/i)).toBeInTheDocument();
    expect(screen.getByText(/ПІДПИСАТИСЬ/i)).toBeInTheDocument();
  });
});
