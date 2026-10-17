export const lines = {
  hard: {
    name: "HARD",
    tag: "Двойной эспрессо",
    color: "#ff4b40",
    mood: "Добавь характера",
    description:
      "Двойной эспрессо. Насыщенные сочетания. Твой кофейный характер.",
    heroImages: [
      "hard-granat.webp",
      "hard-berries.webp",
      "hard-cola.webp",
      "hard-orange-matched.webp",
    ],
    items: [
      {
        id: "hard-cola",
        name: "Кола",
        title: ["КОФЕ.", "КОЛА. HARD."],
        image: "hard-cola.webp",
        color: "#ff4b40",
        description:
          "Классический вкус колы и двойной эспрессо. Насыщенный кофейный напиток без сахара.",
        volume: "0,33 л",
        caffeine: "132 мг / банка",
        sugar: "Без сахара",
        gas: "С газом",
      },
      {
        id: "hard-granat",
        name: "Гранат",
        title: ["HARD", "ГРАНАТ"],
        image: "hard-granat.webp",
        color: "#ef496a",
        description:
          "Терпкие гранатовые ноты и двойной эспрессо. Яркий вкус с характером Hard, без сахара.",
        volume: "0,33 л",
        caffeine: "132 мг / банка",
        sugar: "Без сахара",
        gas: "С газом",
      },
      {
        id: "hard-berries",
        name: "Лесные ягоды",
        title: ["ЛЕСНЫЕ", "ЯГОДЫ"],
        image: "hard-berries.webp",
        color: "#a49af5",
        description:
          "Лесные ягоды в сочетании с двойным эспрессо. Ягодные ноты, кофейная глубина и ни грамма сахара.",
        volume: "0,33 л",
        caffeine: "132 мг / банка",
        sugar: "Без сахара",
        gas: "С газом",
      },
      {
        id: "hard-orange",
        name: "Бамбл Апельсин",
        title: ["БАМБЛ", "АПЕЛЬСИН"],
        image: "hard-orange-matched.webp",
        color: "#d6a26c",
        description:
          "Кофе и апельсиновое настроение. Цитрусовый вкус в линейке Hard.",
        volume: "0,33 л",
        caffeine: null,
        sugar: null,
        gas: null,
      },
    ],
  },
  light: {
    name: "LIGHT",
    tag: "Эспрессо-тоник",
    color: "#c8ec58",
    mood: "Лови свой chill",
    description:
      "Эспрессо, фруктовые ноты и лёгкие пузырьки. Включай свой Light.",
    heroImages: ["light-cherry.webp", "light-mango.webp", "light-lemon.webp"],
    items: [
      {
        id: "light-lemon",
        name: "Лимон–Лайм",
        title: ["ЛИМОН", "ЛАЙМ"],
        image: "light-lemon.webp",
        color: "#c8ec58",
        description:
          "Освежающий дуэт лимона и лайма с эспрессо. Цитрусовый вкус и лёгкие пузырьки.",
        volume: "0,35 л",
        caffeine: "До 150 мг / л",
        sugar: "Содержит сахар",
        gas: "С газом",
      },
      {
        id: "light-mango",
        name: "Манго–Маракуйя",
        title: ["МАНГО", "МАРАКУЙЯ"],
        image: "light-mango.webp",
        color: "#f8b65b",
        description:
          "Тропическое сочетание манго и маракуйи с кофейной основой. Для ярких моментов в твоём ритме.",
        volume: "0,35 л",
        caffeine: "До 150 мг / л",
        sugar: "Содержит сахар",
        gas: "С газом",
      },
      {
        id: "light-cherry",
        name: "Вишня–Гранат",
        title: ["ВИШНЯ", "ГРАНАТ"],
        image: "light-cherry.webp",
        color: "#ee7595",
        description:
          "Вишня и гранат встречаются с эспрессо. Ягодная свежесть и лёгкие пузырьки в линейке Light.",
        volume: "0,35 л",
        caffeine: "До 150 мг / л",
        sugar: "Содержит сахар",
        gas: "С газом",
      },
    ],
  },
  brew: {
    name: "CHILL BREW",
    comingSoon: true,
    tag: "Холодное заваривание",
    color: "#cfa37b",
    mood: "В своём темпе",
    description:
      "Кофе холодного заваривания с натуральным соком. Без газа. Без спешки.",
    heroImages: ["brew-cherry.webp"],
    items: [
      {
        id: "brew-cherry",
        name: "Вишня–Гранат",
        title: ["CHILL", "BREW"],
        image: "brew-cherry.webp",
        color: "#cfa37b",
        description:
          "Кофе холодного заваривания с натуральным соком вишни и граната. Мягкий кофейный вкус без газа.",
        volume: null,
        caffeine: null,
        sugar: "Минимум сахара",
        gas: "Без газа",
      },
    ],
  },
};
export const products = Object.entries(lines).flatMap(([line, data]) =>
  data.items.map((item) => ({ ...item, line })),
);
