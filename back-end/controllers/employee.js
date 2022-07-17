const Employee = require("../models").Employee;

const controller = {
  getAll: async (req, res) => {
    try {
      const employees = await Employee.findAll();
      return res.status(200).json({employees});
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  getEmployee: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.sendStatus(404);
      }
      return res.status(200).json(employee);
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  getEmployeesByProject: async (req, res) => {
    try {
      const projectId = parseInt(req.params.projectId);
      const employees = await Employee.findAll({
        where: {
          projectId: projectId,
        },
      });
      if (!employees) {
        return res.sendStatus(404);
      }
      return res.status(200).json(employees);
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  addEmployee: async (req, res) => {
    try {
      const {  
      name,
      position,
      manager,
      salary,
      co_days 
      } = req.body;
      if (!name || !position || !manager || !salary || !co_days) {
        return res.sendStatus(400);
      }
      let employee = await Employee.findOne({
        where: { name },
      });
      if (employee) {
        return res.sendStatus(400);
      }
      employee = await Employee.create(req.body);
      

      return res.status(201).json({ message: "Employee created!", employee });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  updateEmployee: async (req, res) => {
    try {
      const { name,
        position,
        manager,
        salary,
        co_days,
        projectId } = req.body;
      const id = parseInt(req.params.id);
      let employee = await Employee.findByPk(id);
      if (!employee) {
        return res.sendStatus(404);
      }
      employee.name = name;
      employee.position = position;
      employee.manager = manager;
      employee.salary = salary;
      employee.co_days = co_days;
      employee.projectId = projectId;
      await employee.save();

      return res
        .status(200)
        .json({ message: "Employee updated succesfully!", employee });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  updateEmployeeProject: async (req, res) => {
    try {
      const { projectId } = req.body;
      const id = parseInt(req.params.id);
      let employee = await Employee.findByPk(id);
      if (!employee) {
        return res.sendStatus(404);
      }
      employee.projectId = projectId;
      await employee.save();

      return res
        .status(200)
        .json({ message: "Employee updated succesfully!", employee });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id) {
        return res.sendStatus(400);
      }
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.sendStatus(404);
      }
      await employee.destroy();
      res.statusCode = 200;
      return res.json({ message: "Employee deleted!" });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
};

module.exports = controller;
