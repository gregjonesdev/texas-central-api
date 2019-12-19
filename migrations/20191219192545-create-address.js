'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      street_number: {
        type: Sequelize.INTEGER
      },
      street_name: {
        type: Sequelize.STRING
      },
      street_suffix: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};
