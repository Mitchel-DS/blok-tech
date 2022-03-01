// import express from 'express';
// import { engine } from 'express-handlebars';
const { engine } = require('express-handlebars')
const express = require('express')

const app = express()
const port = 3000;

app.engine('hbs', engine({

  extname: "hbs",

  defaultLayout: false

}));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/login', (req, res) => {
  res.send('<h1>Here you can fill in your credetials</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>404 PAGE NOT FOUND</h1>')
})

app.listen(port)
