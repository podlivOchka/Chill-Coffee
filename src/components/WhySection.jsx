const faqs = [
  [
    "Чем отличаются Light, Hard и Brew?",
    "Light — эспрессо-тоник с фруктовыми сочетаниями в банке 0,35 л. Hard — двойной эспрессо в банке 0,33 л. Chill Brew — кофе холодного заваривания с соком, без газа. Скоро в продаже.",
  ],
  [
    "Все напитки без сахара?",
    "Без сахара — классические Hard: Кола, Гранат и Лесные ягоды. Light содержит сахар. У Chill Brew — минимум сахара. Состав «Бамбл Апельсин» смотри на этикетке.",
  ],
  [
    "Как подавать Chill Coffee?",
    "Охлаждённым. Можно пить прямо из банки или перелить в стакан со льдом. Условия хранения и рекомендации по употреблению указаны на упаковке.",
  ],
  [
    "Как заказать продукцию для магазина?",
    "Напиши на chillco.rus@gmail.com или позвони по номеру +7 (988) 648-87-05. Команда бренда расскажет об условиях поставки и ассортименте.",
  ],
];
export default function WhySection() {
  return (
    <section id="advantages" className="section faq-section">
      <div className="container faq-layout">
        <div className="reveal">
          <p className="eyebrow">БЕЗ ЛИШНИХ ВОПРОСОВ</p>
          <h2>
            РАЗБЕРЁМСЯ
            <br />
            <span>ПО ВКУСУ.</span>
          </h2>
          <p className="muted">Коротко о главном — перед первым глотком.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details className="reveal" key={q}>
              <summary>
                <small>0{i + 1}</small>
                {q}
                <span aria-hidden="true">＋</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
