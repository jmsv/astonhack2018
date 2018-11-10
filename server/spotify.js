const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy;

export const client = {
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET
}

passport.use(
  new SpotifyStrategy(
    {
      clientID: client.id,
      clientSecret: client.secret,
      callbackURL: 'http://localhost:3001/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, cb) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return cb(err, user);
      });
    }
  )
);
