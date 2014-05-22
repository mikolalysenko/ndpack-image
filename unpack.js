"use strict"

module.exports = unpackPNG

var ndarray = require("ndarray")
var parse = require("pngparse-sync")

function unpackPNG(w, h, c, str) {
  var pixels = parse(new Buffer(str, "base64"))
  return ndarray(pixels.data, [h, w, pixels.channels], [pixels.channels*w, pixels.channels, 1], 0)
}