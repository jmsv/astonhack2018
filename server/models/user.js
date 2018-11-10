const mongoose = require('mongoose')

export const User = mongoose.model(
  'User',
  new mongoose.Schema({
    spotifyId: 'string',
    name: 'string'
  })
)
