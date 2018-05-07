/*
 * 2-staticFiles.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let path = require('path')

let app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
