const router = require('express').Router();
const {student} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
