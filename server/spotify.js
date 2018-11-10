const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy;

const User = require('./models/user')

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
      console.log('profile :', JSON.stringify(profile, null, 2))
      const newUser = new User({
        spotifyId: profile.id,
        name: profile.displayName,
        profile: profile
      })
      newUser.save((err, user) => {
        if (err) return console.error(err)
        console.log('new user:', user)
      })
    }
  )
);

module.exports = {client}
