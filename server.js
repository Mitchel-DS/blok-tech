// alle requires modules
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const UserPost = require('./models/UserPost');

// connectie met de port via .env of hard code
const port = process.env.PORT || 3000;

// app variable met express function erin
const app = express();

require('dotenv').config();

// hier wordt de connectDB() functie aangeroepen
connectDB();

// handlebars configuratie, extention, layout en partials locatie
app.engine('hbs', engine({
  extname: "hbs",
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));

app.set('view engine', 'hbs');
app.set('views', './views');

// static folder word hier aangeroepen
app.use('/static', express.static("static"));
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  // bij het laden van de root wordt er met .find() alle data opgehaald uit het database en in de parameter 'userposts' gedaan
  // .lean() wordt gebruikt om het object kleiner te maken, zodat het minder zwaar is om in te laden
  // .then() om er voor te zorgen dat eerst de .find() en .lean() wordt uitgevoerd EN DAN de rest
  UserPost.find().lean().then(userposts => {
    res.render('home', {
      title: "Test",
      userposts:userposts,
    })
  })
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
  console.log(req.body); // om te checken of de data wordt opgehaald uit de form
  // er wordt een new model aangemaakt met de data uit de body
  const userpost = new UserPost(req.body);
  // .save() slaat de data op in het database
  userpost.save();
  // met een redirect naar de root als het gelukt is
  res.redirect('/');
})

// connectie met de port 
app.listen(port)

