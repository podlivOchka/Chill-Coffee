import {
  ambassadors,
  featuredAmbassador as featured,
} from "../data/ambassadors";
import { img } from "../utils/getImage";
export default function AmbassadorsSection() {
  return (
    <section id="people" className="section people-section">
      <div className="container">
        <div className="people-feature">
          <div className="people-feature__photo reveal" data-parallax="35">
            <img
              src={img(featured.image)}
              alt={`${featured.name} пьёт Chill Coffee`}
              width="914"
              height="1172"
              loading="lazy"
            />
            <span className="photo-tag">CHILL COFFEE / В ДВИЖЕНИИ</span>
          </div>
          <div className="people-feature__copy reveal">
            <p className="eyebrow">03 / ЛЮДИ CHILL COFFEE</p>
            <h2>
              ХАРАКТЕР
              <br />
              <span>В ДВИЖЕНИИ.</span>
            </h2>
            <p>
              На тренировке и за её пределами. С Chill Coffee — люди, которые
              выбирают свой путь.
            </p>
            <div className="people-feature__name">
              <h3>{featured.name}</h3>
              <span>{featured.role}</span>
            </div>
          </div>
        </div>
        <div className="people-grid">
          {ambassadors.map((person, i) => (
            <article className="person reveal" key={person.name}>
              <div className="person__photo">
                <img
                  src={img(person.image)}
                  alt={person.name}
                  width="525"
                  height="683"
                  loading="lazy"
                />
                <span aria-hidden="true">0{i + 1}</span>
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
