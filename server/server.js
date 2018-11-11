require('dotenv').config()

const express = require('express')
const passport = require('passport')
const cors = require('cors')
const request = require('request')

const app = express()
const port = 8080

const db = require('./db')
const spotify = require('./spotify')

app.use(cors())

let headers = {
  Authorization: ''
}

request({
  method: 'POST',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`
  },
  form: {
    grant_type: 'client_credentials'
  }
}, function (err, response, body) {
  if (err) throw new Error(err);

  body = JSON.parse(body)
  headers['Authorization'] = `${body.token_type} ${body.access_token}`
  console.log('headers :', headers)
});


console.log('headers :', headers)


app.get('/', (_, res) => res.send('ok'))

app.get('/auth/spotify', passport.authenticate('spotify'), function (req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', {
    failureRedirect: 'http://localhost:3000/'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  }
);

app.get('/playlist-beta', (req, res) => {
  request.get('https://api.spotify.com/v1/playlists/' + '3WfFehxrlSXVHX3NPi979n?si=wbQNps-9RFCUZ9lAsWV2GQ' + '/tracks', {
      headers: headers
    },
    function (err, response, body) {
      if (err) {
        console.log('error:', err);
        return res.status(response.statusCode).send(err)
      }

      body = JSON.parse(body)

      if (body.tracks) {
        const tracksMapped = body.tracks.items.map(item => {
          const t = item.track
          return {
            name: t.name,
            album: t.album.name,
            artists: t.artists.map(a => a.name).join(', '),
            art: t.album.images[0].url
          }
        })

        return res.send(tracksMapped)  
      } else {
        return res.status(500).send({})
      }
    });
})

app.listen(port, () => console.log(`spartify running on ${port}`))