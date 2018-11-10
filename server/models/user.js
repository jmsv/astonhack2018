const mongoose = require('mongoose')

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    spotifyId: 'string',
    name: 'string'
  })
)

module.exports = User