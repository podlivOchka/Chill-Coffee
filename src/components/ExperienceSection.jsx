import { useEffect, useRef, useState } from "react";
import { img } from "../utils/getImage";
import { lines } from "../data/products";
import LaunchBadge from "./LaunchBadge";

const moments = [
  {
    id: "light",
    label: "LIGHT",
    color: "#c8ec58",
    image: "light-lemon.webp",
    title: ["ОСВЕЖИ", "МОМЕНТ."],
    text: "Фруктовые ноты, эспрессо и лёгкие пузырьки. Для встреч, прогулок и всего, что случается между ними.",
    detail: "Эспрессо-тоник / Лимон–Лайм",
  },
  {
    id: "hard",
    label: "HARD",
    color: "#ff4b40",
    image: "hard-cola.webp",
    title: ["ДОБАВЬ", "ХАРАКТЕРА."],
    text: "Двойной эспрессо и насыщенный вкус. Выбирай свой Hard и двигайся в своём ритме.",
    detail: "Двойной эспрессо / Кола",
  },
  {
    id: "brew",
    comingSoon: lines.brew.comingSoon,
    label: "BREW",
    color: "#cfa37b",
    image: "brew-cherry.webp",
    title: ["НОВЫЙ РИТМ.", "СКОРО."],
    text: "Готовим к запуску Chill Brew — кофе холодного заваривания с натуральным соком. Без газа. Без спешки.",
    detail: "Холодное заваривание / Вишня–Гранат",
  },
];

export default function ExperienceSection({ onLineChange }) {
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const moment = moments[active];
  useEffect(() => {
    let observer;
    const setup = () => {
      observer?.disconnect();
      const mobile = window.matchMedia("(max-width: 700px)").matches;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting)
              setActive(Number(entry.target.dataset.moment));
          });
        },
        {
          rootMargin: mobile ? "-65% 0px -5% 0px" : "-32% 0px -32% 0px",
          threshold: 0,
        },
      );
      root.current
        ?.querySelectorAll("[data-moment]")
        .forEach((step) => observer.observe(step));
    };
    setup();
    window.addEventListener("resize", setup);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <section className="experience-section" id="your-rhythm" ref={root}>
      <div className="container">
        <div className="section-top reveal">
          <p className="eyebrow">CHILL — ЭТО СОСТОЯНИЕ</p>
          <p>
            Три характера.
            <br />
            Твой выбор.
          </p>
        </div>
        <div className="experience-layout" data-parallax="75">
          <div
            className="experience-stage"
            data-interactive-visual
            style={{ "--scene-color": moment.color }}
          >
            <img
              className="experience-stage__background"
              src={img("coffee-ice-atmosphere.webp")}
              alt=""
              width="1672"
              height="941"
              loading="lazy"
            />
            <div className="experience-stage__glow" />
            <span className="experience-stage__word" aria-hidden="true">
              {moment.label}
            </span>
            <div className="experience-stage__product" key={moment.id}>
              <img
                src={img(moment.image)}
                alt={`Chill Coffee ${moment.label}`}
                width="534"
                height="948"
                loading="lazy"
              />
            </div>
            <div className="experience-stage__top">
              <span>CHILL / {moment.label}</span>
              <span>0{active + 1} — 03</span>
            </div>
            {moment.comingSoon && (
              <LaunchBadge className="experience-stage__launch" />
            )}
            <div className="experience-stage__caption">
              <span>{moment.detail}</span>
              <span aria-hidden="true">↓</span>
            </div>
            <nav
              className="experience-stage__nav"
              aria-label="Три характера Chill Coffee"
            >
              {moments.map((item, i) => (
                <a
                  key={item.id}
                  href={`#moment-${item.id}`}
                  aria-label={`Посмотреть ${item.label}`}
                  aria-current={active === i ? "step" : undefined}
                  onClick={() => setActive(i)}
                >
                  <span />
                </a>
              ))}
            </nav>
          </div>
          <div className="experience-steps">
            {moments.map((item, i) => (
              <article
                className={`experience-step${active === i ? " is-active" : ""}`}
                data-moment={i}
                id={`moment-${item.id}`}
                key={item.id}
                style={{ "--scene-color": item.color }}
              >
                <p className="eyebrow">
                  0{i + 1} / {item.label}
                </p>
                {item.comingSoon && <LaunchBadge />}
                <h2>
                  {item.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
                <p>{item.text}</p>
                <a
                  href="#products"
                  className="text-link"
                  onClick={() => onLineChange(item.id)}
                >
                  {item.comingSoon
                    ? "Узнать о Brew"
                    : "Этот характер мне подходит"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
