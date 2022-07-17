const express = require("express");
const router = express.Router();
const companyStatisticController = require("../controllers/CompanyStatistic");


router.post("/", companyStatisticController.addCompanyStatistic);

module.exports = router;
