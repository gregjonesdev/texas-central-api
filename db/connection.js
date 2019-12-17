/**
 * Create database connection.
 */

const config = require('../config/config.json');
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
  dialect: config.development.dialect,
  dialectOptions: {
    ssl: config.development.ssl,
  },
  host: config.development.host,
  pool: {
    idle: 10000,
    max: 5,
    min: 0,
  },
  logging: config.development.logging,
  operatorsAliases,
  port: config.development.port,
  ssl: config.development.ssl,
};


module.exports = new Sequelize(config.development.database, config.development.username, config.development.password, options);
