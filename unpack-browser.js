'use strict'

module.exports = unpackPNG

var ndarray = require("ndarray")

//FIXME:  This is broken in FF/Safari, there is a slight race condition when loading PNG images

function unpackPNG(w, h, c, str) {
  var canvas = document.createElement("canvas")
  canvas.width = h
  canvas.height = w
  var img = new Image()
  img.src = "data:image/png;base64," + str
  var context = canvas.getContext("2d")
  context.drawImage(img, 0, 0)
  var pixels = context.getImageData(0, 0, h, w)
  return ndarray(pixels.data, [w, h, c], [4, 4*w, 1], 0)
}
