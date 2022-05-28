const router = require('express').Router();
module.exports = router;

router.use('/songs', require('./songs'));
router.use('/artists', require('./artists'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});