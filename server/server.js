require('dotenv').config()

const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')


const spotify = require('./spotify')

app.use(cors())


app.get('/', (_, res) => res.send('ok'))

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  }
);

app.listen(port, () => console.log(`spartify running on ${port}`))
