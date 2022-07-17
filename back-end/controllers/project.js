const Project = require("../models/Project");
const Employee = require("../models/Employee");

const controller = {
  getAll: async (req, res) => {
    try {
      const project = await Project.findAll();
      return res.status(200).json({ project });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  getProject: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await Project.findByPk(id);
      if (!project) {
        return res.sendStatus(404);
      }
      return res.status(200).json(project);
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  addProject: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.sendStatus(400);
      }

      const project = await Project.create({
        name,
      });

      return res
        .status(201)
        .json({ message: "Project created!", project });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  updateProject: async (req, res) => {
    try {
      const { name } = req.body;
      const id = parseInt(req.params.id);
      let project = await Project.findByPk(id);
      if (!project) {
        return res.sendStatus(404);
      }
      project.name = name;
      await project.save();

      return res
        .status(200)
        .json({ message: "Project updated succesfully!", project });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  deleteProject: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id) {
        return res.sendStatus(400);
      }
      const project = await Project.findByPk(id);
      if (!project) {
        return res.sendStatus(404);
      }
      await project.destroy();
      res.statusCode = 200;
      return res.json({ message: "Project deleted!" });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
};

module.exports = controller;
