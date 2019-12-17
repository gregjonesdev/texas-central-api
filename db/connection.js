/**
 * Create database connection.
 */

const config = require('../config');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

const options = {
  dialect: config.database.dialect,
  dialectOptions: {
    ssl: config.database.ssl,
  },
  host: config.database.host,
  pool: {
    idle: 10000,
    max: 5,
    min: 0,
  },
  logging: config.database.logging,
  operatorsAliases,
  port: config.database.port,
  ssl: config.database.ssl,
};


module.exports = new Sequelize(config.database.database, config.database.username, config.database.password, options);
