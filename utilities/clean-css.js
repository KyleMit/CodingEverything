const CleanCSS = require("clean-css");

/**
 * Minify CSS source code
  *
 * @param {String} cssSource
 */
module.exports = function(cssSource) {
  if (process.env.ELEVENTY_ENV == 'dev') {return cssSource}

  let result = new CleanCSS({}).minify(cssSource).styles;

  return result;
}