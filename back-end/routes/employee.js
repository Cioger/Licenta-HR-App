const express = require("express");
const router = express.Router();
const employeeController = require("../controllers").employee;

router.get("/", employeeController.getAll);
router.get("/byProject/:projectId/", employeeController.getEmployeesByProject);
router.get("/:id/", employeeController.getEmployee);
router.post("/", employeeController.addEmployee);
router.patch("/:id/", employeeController.updateEmployee);
router.delete("/:id/", employeeController.deleteEmployee);
router.patch("/Project/:id/", employeeController.updateEmployeeProject);
module.exports = router;
