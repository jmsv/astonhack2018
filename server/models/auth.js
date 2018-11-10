const mongoose = require('mongoose')

const Auth = mongoose.model(
  'Auth',
  new mongoose.Schema({
    spotifyId: 'string',
    accessToken: 'string',
    refreshToken: 'string',
    expires_in: 'string'
  })
)

module.exports = Auth
