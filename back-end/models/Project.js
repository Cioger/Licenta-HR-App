const db = require("../config/db");
const sequelize = require("sequelize");
const Employee = require("./Employee");
const ProjectStatistic = require("./ProjectStatistic");
const Project = db.define("project", {
  name: {
    type: sequelize.STRING,
  },
});

Project.hasMany(Employee);
Employee.belongsTo(Project);

Project.hasOne(ProjectStatistic);
ProjectStatistic.belongsTo(Project);

module.exports = Project;
