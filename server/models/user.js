const mongoose = require('mongoose')

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    spotifyId: 'string',
    name: 'string',
    profile: 'object'
  })
)

module.exports = User
