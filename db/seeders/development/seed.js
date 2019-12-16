/**
* Seed new development database.
*/

const data = require('../../data/data.json');
const seeder = require('../../seeder');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await seeder.seed({ ...data });
    } catch (error) {
      console.log("error");
    }
  }
}
