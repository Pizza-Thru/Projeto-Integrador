const { Sequelize } = require("sequelize");

const conn = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  process.env.EXSS_PASSAWORD
);

module.exports = conn;