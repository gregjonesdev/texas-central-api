'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceInterval = sequelize.define('ServiceInterval', {
    operating_level: DataTypes.STRING,
    peak_minutes: DataTypes.NUMBER,
    offpeak_minutes: DataTypes.NUMBER
  }, {});
  ServiceInterval.associate = function(models) {
    // associations can be defined here
  };
  return ServiceInterval;
};