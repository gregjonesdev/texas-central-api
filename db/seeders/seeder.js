/**
 * Load and process seed data.
 */
 const db = require('../connection');
 const Promise = require('bluebird');

 /**
  * Process data set.
  *
  * @param {object} data - The data to seed the database.
  */
const seed = async (data) => {
  console.log('seed()')
  console.log("stations: ")
  console.log(data.stations)
  console.log("coordinates:")
  console.log(data.coordinates)
  /**
  * Service Levels
  **/
  await Promise.map(data.service_levels, service_level => new Promise(async (resolve, reject) => {
    try {
      const { name, peak_minutes, offpeak_minutes } = service_level;
      console.log('checkpoint')
      console.log(name)
      console.log(peak_minutes)
      console.log(offpeak_minutes)
    } catch(error) {
      console.log('error 29')
    }
  }))
}

module.exports = {
  seed,
}
