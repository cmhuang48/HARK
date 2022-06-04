const router = require("express").Router();
const {
  models: { Artist },
} = require("../db");
module.exports = router;

// GET artists
router.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (err) {
    next(err);
  }
});

// GET artist
router.get("/:id", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    res.json(artist);
  } catch (err) {
    next(err);
  }
});
