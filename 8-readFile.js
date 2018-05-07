/*
 * 8-readFile.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let fs = require('fs')

const app = express()

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3] || './data.js', (err, data) => {
    // if (err) throw err
    // console.log(data)
    // res.json(JSON.parse(data))
    if (err) return res.sendStatus(500)
    let books
    try {
      books = JSON.parse(data)
    } catch (err) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2], () => {
  console.log(`Server start on port ${process.argv[2]}`)
})
