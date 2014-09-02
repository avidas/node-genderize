#!/usr/bin/env node

var split = require('split')
var genderize = require('./')

process.stdin
  .pipe(split())
  .on('data', function (name) {
    genderize(name, function (err, data) {
      if(err) return console.error(err)
      console.log(JSON.stringify(data))
    })
  })