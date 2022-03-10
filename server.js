const { engine } = require('express-handlebars');
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;

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
    title: "404 - Error"
  });
});

app.listen(port)

