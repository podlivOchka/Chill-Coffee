const partners = [
  [
    "01",
    "ДИСТРИБЬЮТОРАМ",
    "Добавь Chill Coffee в свой портфель. Обсудим ассортимент, поставки и работу в твоём регионе.",
  ],
  [
    "02",
    "МАГАЗИНАМ И СЕТЯМ",
    "Кофейный напиток с узнаваемой упаковкой. Для твоей полки и твоих покупателей.",
  ],
  [
    "03",
    "КАФЕ И ФИТНЕС-КЛУБАМ",
    "Готовый холодный кофе для меню, витрины и активного ритма твоих гостей.",
  ],
];
export default function PartnersSection() {
  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <div className="partners__head reveal">
          <p className="eyebrow">05 / СОТРУДНИЧЕСТВО</p>
          <h2>
            ДОБАВИМ CHILL
            <br />
            <span>В ТВОЙ БИЗНЕС.</span>
          </h2>
        </div>
        <div className="partners-grid">
          {partners.map(([n, title, text]) => (
            <article className="partner reveal" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="partners__cta reveal">
          <p>
            Расскажи о своём проекте.
            <br />
            <span>
              Команда Chill Coffee ответит по условиям сотрудничества.
            </span>
          </p>
          <a
            href="mailto:chillco.rus@gmail.com?subject=Сотрудничество%20с%20Chill%20Coffee"
            className="btn btn--primary"
          >
            Обсудить сотрудничество <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
