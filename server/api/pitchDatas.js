const router = require("express").Router();
const {
  models: { PitchData },
} = require("../db");
module.exports = router;

// GET pitch datas
router.get("/", async (req, res, next) => {
  try {
    const pitchDatas = await PitchData.findAll();
    res.json(pitchDatas);
  } catch (err) {
    next(err);
  }
});

// GET pitch data
router.get("/:id", async (req, res, next) => {
  try {
    const pitchData = await PitchData.findByPk(req.params.id);
    res.json(pitchData);
  } catch (err) {
    next(err);
  }
});

// POST / create new pitch data
router.post("/", async (req, res, next) => {
  try {
    const pitchData = await PitchData.create(req.body);
    res.status(201).json(pitchData);
  } catch (err) {
    next(err);
  }
});

// PUT / update pitch data
router.put("/:id", async (req, res, next) => {
  try {
    const pitchData = await PitchData.findByPk(req.params.id);
    const updated = await pitchData.update(req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
});
