const Employee = require("../models").Employee;

const controller = {
  addCompanyStatistic: async (req, res) => {
    try {
        const statistic = {
            sumSalary,
            sumCoDays,
            avgSalary,
            avgCoDays
        };
      const employees = await Employee.findAll();
      sumSalary=0;
      sumCoDays=0;
        
      employees.array.forEach(element => {
        sumSalary+=element.salary;
        sumCoDays+=element.co_days;
      });
      avgSalary=sumSalary/employees.size;
      avgCoDays=sumCoDays/employees.size;
      statistic=await CompanyStatistic.create(statistic);
      return res.status(201).json({ message: "Employee created!", statistic });
    } catch (error) {
      return res.sendStatus(500);
    }
  },
  
};

module.exports = controller;
