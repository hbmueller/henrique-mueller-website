module.exports = function (eleventyConfig) {
  // Copy assets directory, stripping the leading underscore from output path
  eleventyConfig.addPassthroughCopy({ "src/_assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markupTemplateEngine: "njk",
  };
};
