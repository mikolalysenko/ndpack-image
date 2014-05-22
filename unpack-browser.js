"use strict"

module.exports = unpackPNG

var ndarray = require("ndarray")

function unpackPNG(w, h, str) {
  var canvas = new Canvas(w, h)
  var img = new Image()
  img.src = "data:image/png;base64," + str
  var context = canvas.getContext("2d")
  context.drawImage(img, 0, 0)
  var pixels = context.getImageData(0,0,w,h)
  return ndarray(pixels.data, [h,w,4], [w*4,4,1], 0)
}