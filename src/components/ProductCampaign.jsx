import { products } from "../data/products";
import { img } from "../utils/getImage";

// Position real packshots over campaign backgrounds, keeping labels intact.
const scenes = {
  about: {
    background: "range",
    label:
      "Актуальные банки Chill Coffee: Light Лимон–Лайм, Hard Кола и Hard Гранат",
    cans: [
      ["light-lemon", 27, 21, 56, -9, 1],
      ["hard-granat", 74, 20, 57, 10, 1],
      ["hard-cola", 51, 11, 66, -2, 2],
    ],
  },
  light: {
    background: "light",
    label: "Chill Coffee Light: Лимон–Лайм, Манго–Маракуйя, Вишня–Гранат",
    cans: [
      ["light-cherry", 49, 13, 61, -10, 1, 23, 10, 55],
      ["light-mango", 82, 12, 62, 9, 1, 77, 10, 55],
      ["light-lemon", 66, 7, 70, -2, 2, 50, 6, 62],
    ],
  },
  hard: {
    background: "hard",
    label: "Chill Coffee Hard: Кола, Гранат, Лесные ягоды и Бамбл Апельсин",
    cans: [
      ["hard-granat", 43, 16, 55, -11, 1, 15, 12, 48],
      ["hard-berries", 58, 8, 59, -4, 0, 38, 6, 51],
      ["hard-orange", 86, 15, 56, 11, 1, 84, 12, 48],
      ["hard-cola", 70, 13, 65, 3, 2, 61, 13, 55],
    ],
  },
  range: {
    background: "range",
    label: "Семь актуальных вкусов Chill Coffee в линейках Light и Hard",
    cans: [
      ["light-cherry", 17, 25, 51, -5, 1, 22, 7, 42],
      ["light-mango", 28, 22, 54, -3, 1, 50, 5, 44],
      ["light-lemon", 39, 20, 56, -1, 1, 78, 7, 42],
      ["hard-granat", 50, 19, 57, 0, 2, 15, 37, 39],
      ["hard-cola", 61, 18, 58, 1, 2, 38, 35, 41],
      ["hard-berries", 72, 21, 55, 3, 2, 61, 36, 40],
      ["hard-orange", 83, 24, 52, 5, 2, 84, 37, 39],
    ],
  },
};

export default function ProductCampaign({ scene }) {
  const data = scenes[scene];
  return (
    <div
      className={`product-campaign product-campaign--${scene}`}
      role="img"
      aria-label={data.label}
    >
      <img
        className="product-campaign__background"
        src={img(`campaign-${data.background}-background.webp`)}
        alt=""
        width="1659"
        height="948"
        loading="lazy"
      />
      {data.cans.map(
        ([id, x, y, height, turn, order, mx = x, my = y, mh = height]) => {
          const product = products.find((item) => item.id === id);
          return (
            <div
              key={id}
              className="product-campaign__can"
              style={{
                "--can-x": `${x}%`,
                "--can-y": `${y}%`,
                "--can-height": `${height}%`,
                "--can-turn": `${turn}deg`,
                "--can-order": order,
                "--can-mobile-x": `${mx}%`,
                "--can-mobile-y": `${my}%`,
                "--can-mobile-height": `${mh}%`,
              }}
            >
              <img
                src={img(product.image)}
                alt=""
                width="492"
                height="876"
                loading="lazy"
              />
            </div>
          );
        },
      )}
    </div>
  );
}
