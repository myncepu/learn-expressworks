/*
 * 1-helloWorld.js
 * Copyright (C) 2018 yanpengqiang <yanpengqiang@yan-mbp.local>
 *
 * Distributed under terms of the MIT license.
 */

var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
