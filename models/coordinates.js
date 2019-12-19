'use strict';
module.exports = (sequelize, DataTypes) => {
  const coordinates = sequelize.define('coordinates', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  coordinates.associate = function(models) {
    // associations can be defined here
  };
  return coordinates;
};
