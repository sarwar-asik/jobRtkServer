const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employeeSchema = require("../Schemas/employeeSchema");
const Employee = new mongoose.model("Employee", employeeSchema);

router.post("/employee", async (req, res) => {
  const newEmployee = new Employee(req.body);
  console.log(newEmployee);
  const result = await Employee.create(newEmployee);
  if (result) {
    res.send({ success: true });
  }
});

module.exports = router;
