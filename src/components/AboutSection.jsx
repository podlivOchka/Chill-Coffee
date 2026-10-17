import ProductCampaign from "./ProductCampaign";
export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-top reveal">
          <p className="eyebrow">02 / О БРЕНДЕ</p>
          <span className="section-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="about">
          <div className="about__text reveal">
            <h2>
              КОФЕ.
              <br />
              ХОЛОД.
              <br />
              <span>ХАРАКТЕР.</span>
            </h2>
            <p>
              Chill Coffee — холодный кофейный напиток, который удобно взять с
              собой. На тренировку, в дорогу, на встречу. В твой обычный день.
            </p>
            <p>
              В основе — натуральный кофеин. Во вкусе — кофе, фруктовые и
              ягодные сочетания. В настроении — только здравые движения.
            </p>
            <a href="#products" className="text-link">
              Найти свой вкус <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="about__media reveal" data-parallax="32">
            <ProductCampaign scene="about" />
            <div className="media-caption">
              <span>CHILL COFFEE</span>
              <span>ЗДРАВЫЙ ЗАРЯД БОДРОСТИ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
