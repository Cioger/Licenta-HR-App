const express = require("express");
const router = express.Router();
const employeeRouter = require("./employee");
const dbRouter = require("./db");
const projectRouter = require("./project");
const userRouter = require('./user');
const companyStatisticRouter=require('./companyStatistic');

router.use("/employee", employeeRouter);
router.use("/compstat", companyStatisticRouter);
router.use("/project", projectRouter);
router.use("/user", userRouter);
router.use("/", dbRouter);

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});
module.exports = router;
