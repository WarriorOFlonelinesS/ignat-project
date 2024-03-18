import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();

    // Используем регулярные выражения для поиска текстов
    expect(screen.getByText(/098 900 09 09/)).toBeInTheDocument();
    expect(screen.getByText(/Допомога/)).toBeInTheDocument();
    expect(screen.getByText(/Увійти \/ Зареєструватися/)).toBeInTheDocument();
    expect(screen.getByText(/НОВИНКИ/)).toBeInTheDocument();
    expect(screen.getByText(/ЧОЛОВІКИ/)).toBeInTheDocument();
    expect(screen.getByText(/ЖІНКИ/)).toBeInTheDocument();
    expect(screen.getByText(/АКСЕСУАРИ/)).toBeInTheDocument();
    expect(screen.getByText(/АКЦІЇ/)).toBeInTheDocument();

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    // Для кнопок "Улюблене" и "Кошик" также используем регулярные выражения
    expect(
      screen.getByRole("button", { name: /Улюблене/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Кошик/i })).toBeInTheDocument();
  });
});
