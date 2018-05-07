/*
 * 3-pug.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let path = require('path')

const app = express()

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() })
})

app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
