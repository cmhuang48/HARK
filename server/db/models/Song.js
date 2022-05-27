const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = require("../db");

const Song = db.define("song", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  audioURL: {
    type: STRING,
  }
});

module.exports = Song;
