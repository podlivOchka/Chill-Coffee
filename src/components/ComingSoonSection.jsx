import { img } from "../utils/getImage";
export default function ComingSoonSection() {
  return (
    <section className="section whey-section" id="coming-soon">
      <div className="container whey">
        <div className="whey__media reveal" data-interactive-visual>
          <img
            src={img("protein-bar-coming-soon.png")}
            alt="Chill Whey — протеиновый батончик с натуральным кофе. Скоро в продаже"
            width="1254"
            height="1254"
            loading="lazy"
          />
        </div>
        <div className="whey__copy reveal">
          <p className="eyebrow">НОВЫЙ ФОРМАТ CHILL</p>
          <span className="soon-badge">СКОРО В ПРОДАЖЕ</span>
          <h2>
            CHILL
            <br />
            <span>WHEY.</span>
          </h2>
          <p className="whey__lead">
            Протеиновый батончик
            <br />с добавлением натурального кофе.
          </p>
          <p>
            Кофе в новом формате. Удобный перекус для дороги, учёбы, офиса и
            активного дня.
          </p>
          <a
            className="btn btn--ghost"
            href="https://www.instagram.com/chillcoffee_rus/"
            target="_blank"
            rel="noreferrer"
          >
            Следить за запуском <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
