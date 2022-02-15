const express = require('express')
const app = express()
const port = 3000;

app.use('/static',express.static('static'))

app.get('/', (req, res) => {
  res.send('<h1>Hello client</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Welcome to about</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>Here you can fill in your credetials</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>PAGE NOT FOUND</h1>')
})

app.listen(port)
