require('dotenv').config()

const express = require('express')
const passport = require('passport')
const cors = require('cors')

const app = express()
const port = 8080

const db = require('./db')
const spotify = require('./spotify')

app.use(cors())


app.get('/', (_, res) => res.send('ok'))

app.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: 'http://localhost:3000/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  }
);

app.listen(port, () => console.log(`spartify running on ${port}`))
