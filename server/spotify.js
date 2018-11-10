const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy;

const User = require('./models/user')
const Auth = require('./models/auth')

const client = {
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET
}

passport.use(
  new SpotifyStrategy(
    {
      clientID: client.id,
      clientSecret: client.secret,
      callbackURL: 'https://b97c1fe4.ngrok.io/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, cb) {
      const newUser = new User({
        spotifyId: profile.id,
        name: profile.displayName,
        profile: profile
      })
      newUser.save((err, user) => {
        if (err) return console.error(err)
        console.log('new user:', user)
      })

      new Auth({
        spotifyId: profile.id,
        accessToken: accessToken,
        refreshToken: refreshToken,
        expires_in: expires_in
      }).save((err, auth) => {
        if (err) return console.error(err)
        console.log('new auth:', auth)
      })
    }
  )
);

module.exports = {client}
