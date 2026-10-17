const markets = [
  {
    name: "Ozon",
    className: "ozon",
    url: "https://www.ozon.ru/product/napitok-kofeynyy-toniziruyushchiy-gazirovannyy-lesnye-yagody-5124651457/?at=83tBGvrEVfw5xQqLIqrPL4Zt0WMZpyCB5k0OZuqk35GM&sh=Qq66nRFFHg",
  },
  {
    name: "Wildberries",
    className: "wb",
    url: "https://www.wildberries.ru/catalog/1278486854/detail.aspx",
  },
];
export default function BuySection() {
  return (
    <section id="buy" className="section buy-section">
      <div className="container">
        <div className="section-top reveal">
          <p className="eyebrow">04 / ГДЕ КУПИТЬ</p>
          <span className="section-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="buy__head reveal">
          <h2>
            ТВОЙ CHILL.
            <br />
            <span>УЖЕ РЯДОМ.</span>
          </h2>
          <p>
            От выбора вкуса
            <br />
            до первого глотка.
          </p>
        </div>
        <div className="market-grid">
          {markets.map((m) => (
            <a
              key={m.name}
              href={m.url}
              className={`market market--${m.className}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="market__name">{m.name}</span>
              <span className="market__action">
                Перейти к напитку <b aria-hidden="true">↗</b>
              </span>
            </a>
          ))}
        </div>
        <p className="buy__note">
          Наличие вкусов, стоимость и доставку уточняй на площадках.
        </p>
      </div>
    </section>
  );
}
