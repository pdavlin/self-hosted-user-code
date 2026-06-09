// Sync the mobile browser chrome to the palette. Guarded — older Miniflux
// builds may not emit these meta tags.
const syncThemeColor = () => {
  const light = document.querySelector(
    'meta[name="theme-color"][media="(prefers-color-scheme: light)"]',
  );
  const dark = document.querySelector(
    'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]',
  );
  if (light) light.setAttribute("content", "hsl(0, 25%, 94%)"); // base07
  if (dark) dark.setAttribute("content", "hsl(0, 7%, 10%)"); // base00
};

// Rotate the accent by day-of-month on an 8-day cycle (base08..base0f),
// matching davlin.io. getDate() returns 1..31; % 8 gives 0..7.
const getDay = () => {
  const days = ["8", "9", "a", "b", "c", "d", "e", "f"];
  const day =
    typeof Temporal !== "undefined"
      ? Temporal.Now.plainDateISO().day
      : new Date().getDate();
  return days[day % 8];
};

const applyAccent = () => {
  document.documentElement.style.setProperty(
    "--preferred-accent-color",
    `var(--base0${getDay()})`,
  );
};

// Set the accent before paint to avoid a flash of the default green.
applyAccent();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", syncThemeColor);
} else {
  syncThemeColor();
}
