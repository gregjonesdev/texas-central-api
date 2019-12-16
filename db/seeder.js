/**
 * Load and process seed data.
 */

 /**
  * Process data set.
  *
  * @param {object} data - The data to seed the database.
  */
const seed = (data) => {
  console.log('seed()')
  console.log("stations: ")
  console.log(data.stations)
  console.log("coordinates:")
  console.log(data.coordinates)
}

module.exports = {
  seed,
}
