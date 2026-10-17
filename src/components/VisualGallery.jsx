import { useRef, useState } from "react";
import ProductCampaign from "./ProductCampaign";

const frames = [
  {
    scene: "light",
    title: ["СВЕЖИЙ", "МОМЕНТ."],
    tag: "LIGHT / ТРИ СОЧЕТАНИЯ",
    color: "#c8ec58",
  },
  {
    scene: "hard",
    title: ["КОФЕЙНЫЙ", "ХАРАКТЕР."],
    tag: "HARD / ЧЕТЫРЕ ВКУСА",
    color: "#ff4b40",
  },
  {
    scene: "range",
    title: ["ТВОЙ", "РИТМ."],
    tag: "LIGHT + HARD / ТВОЙ ВЫБОР",
    color: "#f3f2ed",
  },
];

export default function VisualGallery({ motionPaused }) {
  const track = useRef(null),
    viewer = useRef(null);
  const [selected, setSelected] = useState(0);
  const [position, setPosition] = useState(0);
  const move = (direction) => {
    const element = track.current;
    element.scrollBy({
      left:
        direction *
        (element.firstElementChild.getBoundingClientRect().width + 22),
      behavior: motionPaused ? "instant" : "smooth",
    });
  };
  const frame = frames[selected];
  return (
    <section className="section gallery-section" id="chill-visuals">
      <div className="container">
        <div className="gallery-heading reveal">
          <div>
            <p className="eyebrow">ВКУС В КАЖДОМ КАДРЕ</p>
            <h2>
              СМОТРИ.
              <br />
              <span>ЧУВСТВУЙ. CHILL.</span>
            </h2>
          </div>
          <div className="gallery-controls">
            <span>0{position + 1} / 03</span>
            <button
              className="round-btn"
              aria-label="Предыдущее изображение"
              disabled={position === 0}
              onClick={() => move(-1)}
            >
              ←
            </button>
            <button
              className="round-btn"
              aria-label="Следующее изображение"
              disabled={position === frames.length - 1}
              onClick={() => move(1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          className="visual-gallery"
          ref={track}
          tabIndex="0"
          role="region"
          aria-label="Фирменная галерея Chill Coffee. Можно прокручивать по горизонтали"
          onScroll={(event) => {
            const element = event.currentTarget;
            const width =
              element.firstElementChild.getBoundingClientRect().width + 22;
            const max = element.scrollWidth - element.clientWidth;
            setPosition(
              element.scrollLeft >= max - 4
                ? frames.length - 1
                : Math.min(
                    frames.length - 1,
                    Math.round(element.scrollLeft / width),
                  ),
            );
          }}
          onKeyDown={(event) => {
            if (event.target !== track.current) return;
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}
        >
          {frames.map((item, i) => (
            <button
              className="gallery-frame"
              key={item.scene}
              aria-label={`Открыть изображение: ${item.title.join(" ")}`}
              onClick={() => {
                setSelected(i);
                viewer.current.showModal();
              }}
              style={{ "--frame-color": item.color }}
            >
              <div className="gallery-frame__image" data-parallax="35">
                <ProductCampaign scene={item.scene} />
              </div>
              <span className="gallery-frame__tag">{item.tag}</span>
              <span className="gallery-frame__title">
                {item.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
              <span className="gallery-frame__expand" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-note">
          Листай кадры. Нажми на изображение, чтобы рассмотреть детали.
        </p>
      </div>
      <dialog
        ref={viewer}
        className="gallery-viewer"
        aria-labelledby="gallery-viewer-title"
        onClick={(event) => {
          if (event.target === viewer.current) viewer.current.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Закрыть изображение"
          onClick={() => viewer.current.close()}
        >
          ×
        </button>
        <ProductCampaign scene={frame.scene} />
        <div className="gallery-viewer__bottom">
          <h2 id="gallery-viewer-title">{frame.title.join(" ")}</h2>
          <div>
            <button
              className="round-btn"
              aria-label="Предыдущее фото"
              onClick={() =>
                setSelected((selected + frames.length - 1) % frames.length)
              }
            >
              ←
            </button>
            <span>0{selected + 1} / 03</span>
            <button
              className="round-btn"
              aria-label="Следующее фото"
              onClick={() => setSelected((selected + 1) % frames.length)}
            >
              →
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
