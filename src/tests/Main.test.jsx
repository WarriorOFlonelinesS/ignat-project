
import { render, screen } from "@testing-library/react";
import { Main } from "../components/Main";

describe("Main", () => {
  it("renders all subcomponents", () => {
    render(<Main />);

    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("slider")).toBeInTheDocument();
    expect(screen.getByTestId("present")).toBeInTheDocument();
    expect(screen.getByTestId("goods")).toBeInTheDocument();
    expect(screen.getByTestId("promotion")).toBeInTheDocument();
    expect(screen.getByTestId("reviews")).toBeInTheDocument();
  });
});
