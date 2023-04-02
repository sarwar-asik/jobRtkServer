const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employeeSchema = require("../Schemas/employeeSchema");
const Employee = new mongoose.model("Employee", employeeSchema);

router.post("/employee", async (req, res) => {
  const newEmployee = new Employee(req.body);
  // console.log(newEmployee);
  const result = await Employee.create(newEmployee);
  if (result) {
    res.status(200).send({ success: true });
  }
});

router.get("/users/:email", async (req, res) => {
  try {
    const query = req.params.email;

    // console.log(query);
    // Employee.find({}, (error, result) => {
    //   if (error) {
    //     res.status(501).send({ error: "Had an error" });
    //   } else {
    //     res.send(result);
    //   }
    // });

    const getUser = await Employee.findOne({ email: query }).then(
      (getUser) => getUser
    );
    //  res.send(getUser)
    //  console.log(getUser);

    if (getUser?.email) {
      res.status(200).send({ status: true, data: getUser });
      // console.log(getUser);
    } else {
      console.log("not found in DB", query);
      res.status(404).send({ status: false, error: "Not found data" });
    }

    // Employee.find({})
    //   .then((foundItems) => {
    //     if (foundItems.length > 0) {
    //       res.send(foundItems);
    //     }
    //   })
    //   .catch((err) => {
    //     res.send({ error: err.message });
    //   });
  } catch (error) {
    const { name, message, stack } = error;
    console.log({ name, message, stack });
    // res.send({ name, message, stack });
  }
});

module.exports = router;
