//this is the access point for all things database related!

const db = require('./db')
const Artist = require('./models/Artist')
const Song = require('./models/Song')


//associations could go here!
Song.belongsTo(Artist)
Artist.hasMany(Song)

module.exports = {
  db,
  models: {
    Song,
    Artist,
  },
}
