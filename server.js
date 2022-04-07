// express setup
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const UserPost = require('./models/UserPost');

require('dotenv').config();
connectDB();

app.set('view engine', 'hbs');
app.set('views', './views');

app.engine('hbs', engine({
  extname: 'hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));

app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  UserPost.find().lean().then(userposts => {
    res.render('home', {
      title: 'Test',
      userposts:userposts,
    });
  });
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    title: 'Profile'
  });
});

app.get('/userpost', (req, res) => {
  res.render('userpost', {
    title: 'User Post'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 - Page not found'
  });
});

app.post('/userpost', async (req, res) => {
  console.log(req.body); // om te checken of de data wordt opgehaald uit de form
  // er wordt een new model aangemaakt met de data uit de body
  const userpost = await new UserPost(req.body);
  // .save() slaat de data op in het database
  userpost.save();
  // met een redirect naar de root als het gelukt is
  res.redirect('/');
});

// connectie met de port 
app.listen(port);

