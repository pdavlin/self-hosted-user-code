document
  .querySelector(
    'meta[name="theme-color"][media="(prefers-color-scheme: light)"]',
  )
  .setAttribute("content", "hsl(0, 25%, 94%)");

document
  .querySelector(
    'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]',
  )
  .setAttribute("content", "hsl(0, 7%, 10%)");

const getDay = () => {
  const days = ["8", "9", "a", "b", "c", "d", "e", "f"];
  const date = new Date().getDate() % 8;
  return days[date];
};

const getRandomHex = () => {
  return getDay();
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty(
    "--preferred-accent-color",
    `var(--base0${getRandomHex()})`,
  );
});
