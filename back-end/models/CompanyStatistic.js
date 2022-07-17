const db = require("../config/db");
const sequelize = require("sequelize");

const CompanyStatistic = db.define(
  "companystatistic",
  {
    average_salary: {
      type: sequelize.FLOAT,
    },
    total_salary: {
        type: sequelize.FLOAT,
      },
    average_codays: {
        type: sequelize.FLOAT,
      },
    total_codays: {
        type: sequelize.FLOAT,
      },
  },
);

module.exports = CompanyStatistic
