const router = require('express').Router()
const { models: { Artist }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.findAll()
    res.send(artists)
  } catch (err) {
    next(err)
  }
})