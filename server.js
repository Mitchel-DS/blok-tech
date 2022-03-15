const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
const UserPost = require('./models/UserPost');

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
app.use(bodyParser.urlencoded({ extended: false}))

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

app.get('/userpost', (req, res) => {
  res.render('userpost', {
    title: "User Post"
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: "404 - Page not found"
  });
});

app.post('/userpost', (req, res) => {
  console.log(req.body);
  const userpost = new UserPost(req.body);
  userpost.save();
  res.render('home');
})

app.listen(port)

