const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

require('dotenv').config();

connectDB();

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

app.get('/profile', (req, res) => {
  res.render('profile', {
    title: "Profile"
  });
});

app.get('/post', (req, res) => {
  res.render('post', {
    title: "Post"
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: "404 - Page not found"
  });
});

app.listen(port)

