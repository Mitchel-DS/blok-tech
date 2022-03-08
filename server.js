const { engine } = require('express-handlebars')
const express = require('express')
// const connectDB = require('./config/db')

require('dotenv').config()
console.log(process.env)

const app = express()
const port = 3000;

// connectDB();

app.engine('hbs', engine({
  extname: "hbs",
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));

app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/static', express.static("static"));

app.get('/', (req, res) => {
    res.render('home', {
      title: "Home"
    });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About"
  });
});

app.get('/login', (req, res) => {
  res.send('<h1>Here you can fill in your credetials</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>404 PAGE NOT FOUND</h1>')
})

app.listen(port)

