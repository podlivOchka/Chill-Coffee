import { useState } from "react";
import { img } from "../utils/getImage";
const links = [
  ["#products", "Вкусы"],
  ["#about", "О бренде"],
  ["#people", "Наши люди"],
  ["#buy", "Где купить"],
];
export default function Header({ motionPaused, motionLocked, onMotionToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#products">
        Перейти к вкусам
      </a>
      <header className="header">
        <div className="container header__inner">
          <a
            href="#home"
            className="brand"
            aria-label="Chill Coffee — на главную"
          >
            <img
              src={img("logo-orig.png")}
              alt="Chill Coffee"
              width="90"
              height="70"
            />
          </a>
          <nav className="nav" aria-label="Основная навигация">
            {links.map(([href, text]) => (
              <a href={href} key={href}>
                {text}
              </a>
            ))}
          </nav>
          <a href="#partners" className="header__partner">
            Стать партнёром <span aria-hidden="true">↗</span>
          </a>
          <button
            className="motion-toggle"
            aria-pressed={!motionPaused}
            disabled={motionLocked}
            aria-label={
              motionLocked
                ? "Движение выключено в настройках устройства"
                : motionPaused
                  ? "Включить анимацию"
                  : "Приостановить анимацию"
            }
            title={
              motionLocked
                ? "Движение выключено в настройках устройства"
                : motionPaused
                  ? "Включить анимацию"
                  : "Приостановить анимацию"
            }
            onClick={onMotionToggle}
          >
            <span aria-hidden="true">{motionPaused ? "▷" : "Ⅱ"}</span>
          </button>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            <span />
            <span />
          </button>
        </div>
        <nav
          hidden={!open}
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Мобильная навигация"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              e.currentTarget.previousElementSibling
                .querySelector(".menu-toggle")
                .focus();
            }
          }}
        >
          {[...links, ["#partners", "Стать партнёром"]].map(
            ([href, text], i) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                {text}
                <small>0{i + 1} ↗</small>
              </a>
            ),
          )}
        </nav>
      </header>
    </>
  );
}
