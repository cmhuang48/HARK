const router = require("express").Router();
const {
  models: { Song },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const songs = await Song.findAll();
    res.json(songs);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const song = await Song.findByPk(req.params.id);
    res.json(song);
  } catch (error) {
    next(error);
  }
});
