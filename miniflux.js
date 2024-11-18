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
