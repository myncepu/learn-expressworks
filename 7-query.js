/*
 * 7-query.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')

const app = express()

app.get('/search', (req, res) => {
  res.send( req.query )
})

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
