import { Reviews } from "./Reviews";
import { Slider } from "./Slider";
import { Present } from "./Present";
import { Goods } from "./Goods";
import { Promotion } from "./Promotion";

export const Main = () => {
  return (
    <main className="main">
      <div data-testid="main" className="container">
        <Slider data-testid="slider" />
        <Present data-testid="present" />
        <Goods data-testid="goods" />
        <Promotion data-testid="promotion" />
        <Reviews data-testid="reviews" />
      </div>
    </main>
  );
};
