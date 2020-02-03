const Terser = require("terser");

/**
 * Minify CSS source code
  *
 * @param {String} jsSource
 */
module.exports = function(jsSource) {
  if (process.env.ELEVENTY_ENV === 'dev') { return jsSource }

  let minified = Terser.minify(jsSource);
  if( minified.error ) {
      console.log("Terser error: ", minified.error);
      return jsSource;
  }

  return minified.code;
}