const Sequelize = require("sequelize");
const { STRING, TEXT } = Sequelize;
const db = require("../db");

const Song = db.define("song", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  videoURL: {
    type: STRING,
    allowNull: false,
  },
  originalAudio: {
    type: STRING,
    allowNull: false,
  },
  instrumentalAudio: {
    type: STRING,
    allowNull: false,
  },
  vocalAudio: {
    type: STRING,
    allowNull: false,
  },
  lyrics: {
    type: TEXT,
    allowNull: false,
  },
});

module.exports = Song;
