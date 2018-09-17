const router = require('express').Router()
const { Campuses } = require('../db')


router.get('/', async (req, res, next) => {
  try {
     const campuses = await Campuses.findAll()
     res.json(campuses)
  } catch (err){
    next(err)
  }
})

module.exports = router
