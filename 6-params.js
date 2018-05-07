/*
 * 6-params.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let crypto = require('crypto')

const app = express()

app.put('/message/:id', (req, res) => {
  res.send(crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')
  )
})

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
