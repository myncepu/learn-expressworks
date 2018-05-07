/*
 * cookieparser.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

let express = require('express')
let cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(8080, () => {
  console.log('Server started on 8080')
})
