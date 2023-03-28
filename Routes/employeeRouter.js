const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employeeSchema = require("../Schemas/employeeSchema");
const Employee = new mongoose.model("Employee", employeeSchema);

router.post("/employee", async (req, res) => {
  const newEmployee = new Employee(req.body);
  console.log(newEmployee);
  // const result = await Employee.create(newEmployee);
  // if (result) {
  //   res.send({ success: true });
  // }
});

router.get("/users", async (req, res) => {
  try {
    // Employee.find({}, (error, result) => {
    //   if (error) {
    //     res.status(501).send({ error: "Had an error" });
    //   } else {
    //     res.send(result);
    //   }
    // });
    Employee.find({}).then((foundItems) => {
      if(foundItems.length>0){
        res.send(foundItems)
      }
   
    })
    .catch(err=>{
      res.send({error:err.message})
    })
  } catch (error) {
    const { name, message, stack } = error;
    console.log({ name, message, stack });
    // res.send({ name, message, stack });
  }
});

module.exports = router;
