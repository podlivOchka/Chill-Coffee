function SectionTitle({ label, title, text, centered = false }) {
  return (
    <div
      className={`section-title ${centered ? "section-title--centered" : ""}`}
    >
      {label && <p className="section-title__label">{label}</p>}
      <h2>{title}</h2>
      {text && <p className="section-title__text">{text}</p>}
    </div>
  );
}

export default SectionTitle;
