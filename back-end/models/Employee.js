const db = require("../config/db");
const sequelize = require("sequelize");

const Employee = db.define(
  "employee",
  {
    name: {
      type: sequelize.STRING,
    },
    position: {
      type: sequelize.STRING,
    },
    manager: {
      type: sequelize.STRING,
    },
    salary: {
      type: sequelize.DOUBLE,
    },
    co_days: {
      type: sequelize.INTEGER,
    },
  },
);

module.exports = Employee
