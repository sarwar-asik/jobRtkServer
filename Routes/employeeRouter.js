const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employeeSchema = require("../Schemas/employeeSchema");
const Employee = new mongoose.model("Employee", employeeSchema);

router.post("/employee", async (req, res) => {
  const newEmployee = new Employee(req.body);

  const result = await Employee.create(newEmployee);
});

module.exports = router;
