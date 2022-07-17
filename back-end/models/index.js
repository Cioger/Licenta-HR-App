const Employee = require("./Employee");
const Project = require("./Project");
const User = require('./user');
const ProjectStatistic = require("./ProjectStatistic");
const CompanyStatistic = require("./CompanyStatistic");

Project.hasMany(Employee);
Employee.belongsTo(Project);

module.exports = {
  Employee: Employee,
  Project: Project,
  User: User,
  ProjectStatistic: ProjectStatistic,
  CompanyStatistic: CompanyStatistic
};
