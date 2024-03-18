import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);
    
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    

    expect(screen.getByText(/Контакт-центр/i)).toBeInTheDocument();
    expect(screen.getByText(/Покупцям/i)).toBeInTheDocument();
    expect(screen.getByText(/Особистий кабінет/i)).toBeInTheDocument();
    expect(screen.getByText(/Про компанію/i)).toBeInTheDocument();
    

    expect(screen.getByText(/Оплата і доставка/i)).toBeInTheDocument();
    expect(screen.getByText(/Повернення/i)).toBeInTheDocument();
    expect(screen.getByText(/Питання та відповіді/i)).toBeInTheDocument();
    expect(screen.getByText(/Мої дані/i)).toBeInTheDocument();
    expect(screen.getByText(/Історія замовлень/i)).toBeInTheDocument();
    expect(screen.getByText(/Улюблені/i)).toBeInTheDocument();
    expect(screen.getByText(/Розсилки/i)).toBeInTheDocument();
    expect(screen.getByText(/Про нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Новини/i)).toBeInTheDocument();
    expect(screen.getByText(/Стати партнером/i)).toBeInTheDocument();
    expect(screen.getByText(/Угода користувача/i)).toBeInTheDocument();
    

    expect(screen.getByRole("link", { name: /НОВИНКИ/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ЧОЛОВІКИ/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ЖІНКИ/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /АКСЕСУАРИ/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /АКЦІЇ/i })).toBeInTheDocument();
    

    expect(screen.getByText(/© \d{4} — \d{4} IGNAT\. Усі права захищені\./i)).toBeInTheDocument();
  });
});
