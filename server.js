const express = require('express')
// const app = express()
// const port = 3000;

express()
  .use('/static',express.static('static'))

  .get('/', onhome)
  .get('/about', onabout)
  .get('/login', onlogin)

  .listen(8000)

  // .use() voor het gebruik van middleware


function onhome(req, res) {
  res.send('<h1>Hello Client</h1>')
}

function onabout(req, res) {
  res.send('<h1>Welcome to about</h1>')
}

function onlogin(req, res) {
  res.send('<h1>Here you can login</h1>')
}
