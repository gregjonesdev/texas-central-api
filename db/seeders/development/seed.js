/**
* Seed new development database.
*/

const coordinates = require('../../data/coordinates.json');
const operations = require('../../data/operations.json');
const seeder = require('../../seeder');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await seeder.seed({ ...operations });
    } catch (error) {
      console.log("error");
    }
    try {
      await seeder.seed({ ...coordinates });
    } catch (error) {
      console.log("error");
    }
  }
}
