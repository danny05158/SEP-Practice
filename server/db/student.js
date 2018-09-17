'use strict'
const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  gpa: { //need to implement range bt 0-4.0
    type: Sequelize.DECIMAL
  }
})

module.exports = Student
