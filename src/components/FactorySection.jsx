import { img } from "../utils/getImage";
export default function FactorySection() {
  return (
    <section className="factory-section">
      <div className="container factory">
        <div className="factory__copy reveal">
          <p className="eyebrow">ПРОИЗВОДСТВО</p>
          <h2>
            ОТ ИДЕИ
            <br />
            <span>ДО БАНКИ.</span>
          </h2>
          <p>
            Вкус начинается с внимания к продукту. Производство Chill Coffee —
            на заводе Berdinberg.
          </p>
        </div>
        <img
          className="factory__banner reveal"
          src={img("factory-banner.png")}
          alt="Материалы Chill Coffee: произведено на заводе Berdinberg"
          width="1672"
          height="941"
          loading="lazy"
        />
      </div>
    </section>
  );
}
