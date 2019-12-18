'use strict';
module.exports = (sequelize, DataTypes) => {
  const service_interval = sequelize.define('service_interval', {
    operating_level: DataTypes.STRING,
    peak_minutes: DataTypes.INTEGER,
    offpeak_minutes: DataTypes.INTEGER
  }, {});
  service_interval.associate = function(models) {
    // associations can be defined here
  };
  return service_interval;
};
