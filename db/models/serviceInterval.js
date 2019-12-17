
/**
 * Service Interval model.
 */

/**
 * Reference to all loaded models.
 */
let models = null;

/**
 * Enum type options.
 */
const enums = {
  operatingLevel: {
    Initial: 'initial',
    Regular: 'regular',
    Maximum: 'maximum',
  },
};

module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('ServiceInterval', {
    offpeakMinutes: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    peakMinutes: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    operatingLevel: {
      allowNull: false,
      type: DataTypes.ENUM(Object.values(enums.operatingLevel)),
      validate: {
        checkValues(value) {
          const values = Object.values(enums.operatingLevel);

          if (!values.includes(value)) {
            throw new Error(`Invalid value for operating level.  Allowed ${values.join(', ')}`);
          }
        },
      },
    },
  });

  /**
   * Default attributes returned in response.
   */
  table.defaultAttributes = [
    'offpeakMinutes',
    'peakMinutes',
    'operatingLevel',
  ];

  /**
   * Search attributes
   */
  table.searchAttributes = [];

  /**
   * Enumerated types
   */
  table.enums = enums;

  /**
   * Create associations
   *
   * @param {array} associated - Collection of loaded models.
   */


  return table;
};
