const Sequelize = require("sequelize");
const { ARRAY, DECIMAL, BOOLEAN } = require("sequelize");
const db = require("../db");

const PitchData = db.define("pitch data", {
  pitches: {
    type: ARRAY(DECIMAL(10, 2)),
  },
  original: {
    type: BOOLEAN,
  },
  score: {
    type: DECIMAL(10, 2),
  },
});

module.exports = PitchData;
