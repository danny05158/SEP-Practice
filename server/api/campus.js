const router = require('express').Router();
const {Campus} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
