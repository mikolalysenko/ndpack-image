'use strict'

module.exports = unpackPNG

var ndarray = require("ndarray")

//FIXME:  This is broken in FF/Safari

function unpackPNG(w, h, c, str) {
  var canvas = document.createElement("canvas")
  canvas.width = h
  canvas.height = w
  var img = new Image()
  img.src = "data:image/png;base64," + str
  var context = canvas.getContext("2d")
  context.drawImage(img, 0, 0)
  var pixels = context.getImageData(0, 0, h, w)
  return ndarray(pixels.data, [h, w, c], [4*w, 4, 1], 0)
}