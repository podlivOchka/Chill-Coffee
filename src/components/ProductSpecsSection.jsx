export default function ProductSpecsSection() {
  return (
    <section className="section specs-section" id="specs">
      <div className="container">
        <div className="section-top reveal">
          <p className="eyebrow">ДЕТАЛИ ПРОДУКТА</p>
          <span>Для тебя и твоего бизнеса</span>
        </div>
        <div className="specs-heading reveal">
          <h2>
            ДВА ХАРАКТЕРА.
            <br />
            <span>ВСЁ ПО ДЕЛУ.</span>
          </h2>
          <p>Основные параметры Light и классической линейки Hard.</p>
        </div>
        <div className="specs-table-wrap reveal">
          <table className="specs-table">
            <thead>
              <tr>
                <th scope="col">Характеристика</th>
                <th scope="col">LIGHT</th>
                <th scope="col">HARD</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Объём банки", "0,35 л", "0,33 л"],
                ["Кофеин", "До 150 мг/л", "132 мг в банке"],
                ["Сахар", "Содержит", "Без сахара"],
                ["Банок в упаковке", "6", "6"],
                ["Упаковок на паллете", "288", "282"],
                ["Банок на паллете", "1 728", "1 692"],
              ].map(([label, light, hard]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{light}</td>
                  <td>{hard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="specs-note">
          Параметры Hard приведены для вкусов Кола, Гранат и Лесные ягоды.
          Полный состав и характеристики отдельных вкусов указаны на этикетке.
        </p>
      </div>
    </section>
  );
}
