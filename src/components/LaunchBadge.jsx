export default function LaunchBadge({ compact = false, className = "" }) {
  return (
    <em
      className={`launch-badge ${compact ? "launch-badge--compact" : ""} ${className}`}
    >
      <i aria-hidden="true" />
      {compact ? "Скоро" : "Скоро в продаже"}
    </em>
  );
}
