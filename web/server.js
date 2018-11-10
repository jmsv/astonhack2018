require('dotenv').config()

const express = require('express')
const passport = require('passport')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 8080

const spotify = require('./server/spotify')

app.use(cors())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/ok', function (req, res) {
  res.send('ok')
})

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  }
);

app.listen(port, () => console.log(`spartify running on ${port}`))
