/*
 * 5-css.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let stylus = require('stylus')
let path = require('path')

const app = express()

app.use(stylus.middleware(process.argv[3] || (__dirname + '/public')))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
