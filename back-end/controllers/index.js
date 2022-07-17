const employeeController = require("./employee");
const projectController = require("./project");
const dbController = require("./db");
const userController = require('./user');

const controllers = {
  employee: employeeController,
  db: dbController,
  project: projectController,
  user: userController
};

module.exports = controllers;
