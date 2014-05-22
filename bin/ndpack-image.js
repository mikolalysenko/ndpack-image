#!/usr/bin/env node

var getPixels = require("get-pixels")
var savePixels = require("save-pixels")
var concat = require("concat-stream")

getPixels(process.argv[2], function(err, img) {
  if(err) {
    process.exit(1)
  }
  savePixels(img, "png").pipe(concat(function(data){
    var str = ["module.exports=require('ndpack-image')(",
      img.shape[0], ",",
      img.shape[1], ",",
      img.shape[2], ",",
      '"', data.toString("base64"), '")'].join("")
    console.log(str)
  }))
})