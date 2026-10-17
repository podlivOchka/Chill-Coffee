export default function ContactsSection() {
  return (
    <section id="contacts" className="section contacts-section">
      <div className="container">
        <p className="eyebrow reveal">ОСТАЁМСЯ НА СВЯЗИ</p>
        <div className="contact-main reveal">
          <a href="mailto:chillco.rus@gmail.com">
            chillco.rus@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+79886488705">+7 (988) 648-87-05</a>
        </div>
        <div className="contact-socials reveal">
          <a
            href="https://www.instagram.com/chillcoffee_rus/"
            target="_blank"
            rel="noreferrer"
          >
            <span>INSTAGRAM БРЕНДА</span>@chillcoffee_rus ↗
          </a>
          <a
            href="https://www.instagram.com/gasanov_gamzat_/"
            target="_blank"
            rel="noreferrer"
          >
            <span>ОСНОВАТЕЛЬ</span>Гасанов Гамзат ↗
          </a>
          <a href="https://chill-coffee.ru/" target="_blank" rel="noreferrer">
            <span>CHILL COFFEE</span>chill-coffee.ru ↗
          </a>
        </div>
      </div>
    </section>
  );
}
