/**
 * Load and process seed data.
 */
 const db = require('../connection');
 const models = require('../models');
 const Promise = require('bluebird');

 /**
  * Process data set.
  *
  * @param {object} data - The data to seed the database.
  */
const seed = async (data) => {
  console.log('seed()')
  console.log(db)
  // console.log("stations: ")
  // console.log(data.stations)
  // console.log("coordinates:")
  // console.log(data.coordinates)
  /**
  * Service Levels
  **/
  await Promise.map(data.service_levels, service_level => new Promise(async (resolve, reject) => {
    try {
      const { name, peak_minutes, offpeak_minutes } = service_level;
      // console.log('checkpoint')
      // console.log(name)
      // console.log(peak_minutes)
      // console.log(offpeak_minutes)
      console.log('current hot spot...')
      console.log(models)

    } catch(error) {
      console.log('error 29')
    }
  }))
}

module.exports = {
  seed,
}
