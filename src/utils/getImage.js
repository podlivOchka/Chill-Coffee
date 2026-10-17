export const img = (fileName) =>
  `${import.meta.env.BASE_URL}images/${fileName.replace(/\.png$/, ".webp")}`;
