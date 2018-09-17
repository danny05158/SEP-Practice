const router = require('express').Router();
const {campus} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
