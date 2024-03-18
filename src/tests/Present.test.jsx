
import { render, screen } from "@testing-library/react";
import { Present } from "../components/Present";

describe("Present", () => {
  it("renders correctly", () => {
    render(<Present />);
    
    const titleElement = screen.getByText(
      /Ми знаємо, що сподобається вашим “великим” друзям!/i
    );
    const textElement = screen.getByText(
      /Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”/i
    );
    const buttonElement = screen.getByText(/До каталогу/i);
    const imageElement = screen.getByAltText("");
    
    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
