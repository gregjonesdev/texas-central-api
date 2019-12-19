'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    street_number: DataTypes.NUMBER,
    street_name: DataTypes.STRING,
    street_suffix: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};
