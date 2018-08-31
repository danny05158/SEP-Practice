'use strict'
const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 0  //not sure if default val should be this. ask?s
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.TEXT('long')
  }
});
