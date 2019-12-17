/**
 * Load and register models.
 */

const db = require('../../db/connection');
const fs = require('fs');
const path = require('path');

const models = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.spec.js') === -1) && (file.indexOf('index.js') === -1))
  .map((file) => {
    const model = db.import(path.join(__dirname, file));
    models[model.name] = model;
    return model;
  })
  .forEach((model) => {
    if (typeof model.associate === 'function') {
      model.associate(models);
    }
  });

module.exports = models;

