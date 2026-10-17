import { img } from "../utils/getImage";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#home" aria-label="Chill Coffee — на главную">
            <img
              src={img("logo-orig.png")}
              alt="Chill Coffee"
              width="95"
              height="74"
            />
          </a>
          <p>
            ТОЛЬКО ЗДРАВЫЕ
            <br />
            <span>ДВИЖЕНИЯ.</span>
          </p>
          <a className="back-top" href="#home">
            Наверх ↑
          </a>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Chill Coffee</span>
          <span>Здравый заряд бодрости.</span>
          <a
            href="https://chill-coffee.ru/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Политика конфиденциальности ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
