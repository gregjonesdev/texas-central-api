'use strict';
module.exports = (sequelize, DataTypes) => {
  const stations = sequelize.define('stations', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  stations.associate = function(models) {
    stations.belongsTo(models.addresses, {
      foreignKey: 'address_id',
    });
    stations.belongsTo(models.coordinates, {
      foreignKey: 'coordinates_id',
    });

  };
  return stations;
};
