/*
 * 4-form.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', (req, res) => {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
