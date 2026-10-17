import { useRef, useState } from "react";
import { lines } from "../data/products";
import { img } from "../utils/getImage";
import LaunchBadge from "./LaunchBadge";
export default function ProductsSection({ line, onLineChange }) {
  const [selectedId, setSelectedId] = useState("hard-cola");
  const dialog = useRef(null),
    touch = useRef(null);
  const data = lines[line],
    product = data.items.find((p) => p.id === selectedId) || data.items[0],
    index = data.items.indexOf(product);
  const step = (direction) =>
    setSelectedId(
      data.items[(index + direction + data.items.length) % data.items.length]
        .id,
    );
  const specs = [
    ["Линейка", data.name],
    ["Вкус", product.name],
    ["Объём", product.volume],
    ["Кофеин", product.caffeine],
    ["Сахар", product.sugar],
    ["Газирование", product.gas],
  ].filter(([, value]) => value);
  return (
    <section id="products" className="section catalog">
      <div className="container">
        <div className="section-top reveal">
          <p className="eyebrow">01 / КОЛЛЕКЦИЯ ВКУСОВ</p>
          <p>
            Разный характер.
            <br />
            Один Chill Coffee.
          </p>
        </div>
        <div className="catalog__head reveal">
          <h2>
            ВКЛЮЧАЙ
            <br />
            <span>СВОЙ CHILL.</span>
          </h2>
          <div
            className="line-tabs"
            role="tablist"
            aria-label="Линейки Chill Coffee"
          >
            {Object.entries(lines).map(([key, item], i, all) => (
              <button
                role="tab"
                key={key}
                id={`tab-${key}`}
                aria-selected={line === key}
                aria-controls="flavor-panel"
                tabIndex={line === key ? 0 : -1}
                onClick={() => onLineChange(key)}
                onKeyDown={(e) => {
                  let next;
                  if (e.key === "ArrowRight") next = (i + 1) % all.length;
                  else if (e.key === "ArrowLeft")
                    next = (i + all.length - 1) % all.length;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = all.length - 1;
                  else return;
                  e.preventDefault();
                  onLineChange(all[next][0]);
                  document.getElementById(`tab-${all[next][0]}`).focus();
                }}
              >
                {key === "brew" ? "Brew" : item.name}
                {item.comingSoon ? (
                  <LaunchBadge compact />
                ) : (
                  <sup>0{item.items.length}</sup>
                )}
              </button>
            ))}
          </div>
        </div>
        <div
          id="flavor-panel"
          role="tabpanel"
          aria-labelledby={`tab-${line}`}
          className={`flavor-panel flavor-panel--${line}`}
          style={{ "--flavor": product.color }}
        >
          <div
            className="flavor-stage"
            data-interactive-visual
            onTouchStart={(e) => {
              touch.current = [
                e.changedTouches[0].clientX,
                e.changedTouches[0].clientY,
              ];
            }}
            onTouchEnd={(e) => {
              if (!touch.current) return;
              const dx = e.changedTouches[0].clientX - touch.current[0],
                dy = e.changedTouches[0].clientY - touch.current[1];
              if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
                step(dx < 0 ? 1 : -1);
              touch.current = null;
            }}
          >
            <span className="flavor-stage__label">
              CHILL COFFEE / {data.tag}
            </span>
            <span className="flavor-stage__word" aria-hidden="true">
              {line === "brew" ? "BREW" : data.name}
            </span>
            <div className="flavor-stage__halo" />
            <img
              key={product.id}
              className="flavor-stage__can"
              src={img(product.image)}
              alt={`Chill Coffee ${data.name} ${product.name}`}
              width="534"
              height="948"
              loading="lazy"
            />
            <div className="flavor-stage__bottom">
              <button
                className="round-btn"
                onClick={() => step(-1)}
                aria-label="Предыдущий вкус"
                disabled={data.items.length === 1}
              >
                ←
              </button>
              <span>
                0{index + 1} / 0{data.items.length}
              </span>
              <button
                className="round-btn"
                onClick={() => step(1)}
                aria-label="Следующий вкус"
                disabled={data.items.length === 1}
              >
                →
              </button>
            </div>
          </div>
          <div className="flavor-copy">
            <div
              className="flavor-copy__text"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="eyebrow">
                {data.name} /{" "}
                {product.id === "hard-orange" ? "Кофе и цитрусы" : data.tag}
              </p>
              {data.comingSoon && <LaunchBadge />}
              <h3>
                {product.title.map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </h3>
              <p className="flavor-copy__description">{product.description}</p>
            </div>
            <div className="flavor-pills">
              {[product.volume, product.sugar, product.gas]
                .filter(Boolean)
                .map((text) => (
                  <span key={text}>{text}</span>
                ))}
            </div>
            <div className="flavor-choice">
              <p className="micro-label">
                {data.comingSoon ? "Первое сочетание" : "Выбери сочетание"}
              </p>
              <div
                className="flavor-choice__buttons"
                role="group"
                aria-label={`Вкусы ${data.name}`}
              >
                {data.items.map((p) => (
                  <button
                    key={p.id}
                    aria-pressed={product.id === p.id}
                    onClick={() => setSelectedId(p.id)}
                  >
                    <span
                      className="flavor-choice__dot"
                      style={{ background: p.color }}
                    />
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            {data.comingSoon && (
              <div className="brew-launch-note">
                <span aria-hidden="true">↗</span>
                <p>
                  <strong>Новый ритм уже на подходе.</strong>О запуске Chill
                  Brew расскажем в наших соцсетях.
                </p>
              </div>
            )}
            <div className="flavor-actions">
              <a
                href={
                  data.comingSoon
                    ? "https://www.instagram.com/chillcoffee_rus/"
                    : "#buy"
                }
                className="btn btn--primary"
                {...(data.comingSoon
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {data.comingSoon ? "Следить за запуском" : "Хочу попробовать"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <button
                className="text-button"
                onClick={() => dialog.current.showModal()}
              >
                Характеристики <span aria-hidden="true">＋</span>
              </button>
            </div>
          </div>
        </div>
        <p className="catalog__note">
          Подавай охлаждённым. Полный состав и рекомендации по употреблению
          смотри на этикетке.
        </p>
      </div>
      <dialog
        ref={dialog}
        className="product-dialog"
        aria-labelledby="product-dialog-title"
        onClick={(e) => {
          if (e.target === dialog.current) {
            const r = e.target.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              dialog.current.close();
          }
        }}
      >
        <button
          className="dialog-close"
          aria-label="Закрыть характеристики"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
        <p className="eyebrow">Chill Coffee / О напитке</p>
        <h2 id="product-dialog-title">{product.name}</h2>
        <table>
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Полный состав, условия хранения и рекомендации по употреблению указаны
          на этикетке напитка.
        </p>
        <button
          className="btn btn--primary"
          onClick={() => dialog.current.close()}
        >
          Понятно <span aria-hidden="true">↗</span>
        </button>
      </dialog>
    </section>
  );
}
