const router = require('express').Router()
// const db = require('../db')
const {Students} = require('../db')

router.get('/', async (req, res, next) => {
 try {
    const students = await Students.findAll()
    res.json(students);
 } catch (err){
     next(err)
 }
})

module.exports = router
