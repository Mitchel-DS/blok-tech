// hier alle requires
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const UserPost = require('./models/UserPost');

// connectie met de port
const port = process.env.PORT || 3000;
const app = express();

require('dotenv').config();

// hier wordt de connectDB() functie aangeroepen
connectDB();

// handlebars configuratie
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
  // bij het laden van de home pagina wordt er met .find() alle data opgehaald uit het database en met parameters in 'userposts' gedaan
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
  // met een redirect naar de home als het gelukt is
  res.redirect('/');
})

// connectie met de port 
app.listen(port)

