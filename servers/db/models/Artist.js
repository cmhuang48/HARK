const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = require("../db");

const Artist = db.define("artist", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Artist;
