'use strict';
const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
        isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 0
  },
  gpa: {
    type: Sequelize.DECIMAL//add range per specification
  }

});
