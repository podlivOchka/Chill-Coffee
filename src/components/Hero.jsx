import { lines } from "../data/products";
import { img } from "../utils/getImage";
import LaunchBadge from "./LaunchBadge";
export default function Hero({ line, onLineChange }) {
  const data = lines[line];
  return (
    <section
      id="home"
      className={`hero hero--${line}`}
      style={{ "--mood": data.color }}
    >
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow hero__label">
            <span /> ХОЛОДНЫЙ КОФЕ. ГОРЯЧИЙ ХАРАКТЕР.
          </p>
          {data.comingSoon && <LaunchBadge className="hero__launch-badge" />}
          <h1 aria-label="Здравый заряд бодрости">
            <span className="hero__title-line">
              <span>ЗДРАВЫЙ</span>
            </span>
            <span className="hero__title-line">
              <span className="hero__title-accent">ЗАРЯД</span>
            </span>
            <span className="hero__title-line">
              <span>
                БОДРОСТИ<span className="hero__dot">.</span>
              </span>
            </span>
          </h1>
          <p className="hero__text" aria-live="polite">
            {data.description}
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              {data.comingSoon ? "Познакомиться с Brew" : "Выбрать свой вкус"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={
                data.comingSoon
                  ? "https://www.instagram.com/chillcoffee_rus/"
                  : "#buy"
              }
              className="hero__buy"
              {...(data.comingSoon
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {data.comingSoon ? "Следить за запуском" : "Где купить"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a href="#your-rhythm" className="hero__scroll-hint">
            <span aria-hidden="true">↓</span> Три характера. Листай дальше.
          </a>
        </div>
        <div
          className="hero__visual"
          role="img"
          aria-label={`Chill Coffee ${data.name}: ${data.comingSoon ? "скоро в продаже" : `${data.heroImages.length} вкуса`}`}
          data-interactive-visual
        >
          <img
            className="hero__atmosphere"
            src={img("coffee-ice-atmosphere.webp")}
            alt=""
            width="1672"
            height="941"
          />
          <div className="hero__ring" />
          <div className="hero__ring hero__ring--outer" />
          <span className="hero__backword" aria-hidden="true">
            {line === "brew" ? "BREW" : data.name}
          </span>
          <div className="hero__cans" key={line}>
            {data.heroImages.map((image, i) => (
              <div key={`${line}-${i}`} className={`hero__can hero__can--${i}`}>
                <img
                  src={img(image)}
                  alt=""
                  width="534"
                  height="948"
                  fetchPriority={i === 2 || line === "brew" ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
          {data.comingSoon && (
            <div className="hero__launch-stamp" aria-hidden="true">
              <small>НОВЫЙ CHILL</small>
              <strong>СКОРО...</strong>
              <span>В своём темпе.</span>
            </div>
          )}
          <span className="hero__annotation">
            НАТУРАЛЬНЫЙ
            <br />
            КОФЕИН <b aria-hidden="true">↙</b>
          </span>
          <div className="hero__visual-bottom">
            <span>{data.tag}</span>
            <span>Охлади. Открой. Chill.</span>
          </div>
        </div>
        <div className="hero__modes" role="group" aria-label="Выбери линейку">
          {Object.entries(lines).map(([key, item], i) => (
            <button
              key={key}
              aria-pressed={line === key}
              onClick={() => onLineChange(key)}
            >
              <small>0{i + 1}</small>
              <strong>{item.name}</strong>
              {item.comingSoon ? (
                <LaunchBadge compact />
              ) : (
                <span>{item.mood}</span>
              )}
              <b aria-hidden="true">↗</b>
            </button>
          ))}
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div>
          CHILL MODE ON <i>✳</i> КОФЕ С ХАРАКТЕРОМ <i>✳</i> ТОЛЬКО ЗДРАВЫЕ
          ДВИЖЕНИЯ <i>✳</i> CHILL MODE ON <i>✳</i> КОФЕ С ХАРАКТЕРОМ <i>✳</i>{" "}
          ТОЛЬКО ЗДРАВЫЕ ДВИЖЕНИЯ <i>✳</i>
        </div>
      </div>
    </section>
  );
}
