// This is the access point for all things database related!

const db = require("./db");
const Artist = require("./models/Artist");
const PitchData = require("./models/PitchData");
const Song = require("./models/Song");

// Associations
Song.belongsTo(Artist);
Artist.hasMany(Song);
PitchData.belongsTo(Song);
Song.hasMany(PitchData);


module.exports = {
  db,
  models: {
    Song,
    Artist,
    PitchData,
  },
};
