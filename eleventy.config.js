export default function (eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src");

  return {
    dir: {
      input: "src", // Input directory
      output: "dist", // Output directory
    },
  };
}
