const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const jobSchema = require("../Schemas/jobSchema");
const Job = new mongoose.model("JOB", jobSchema);

router.post("/addJob", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    console.log(newJob, "from body");

    Job.create(newJob)
      .then((result) => {
        res.status(200).send({ success: true });
        console.log(result, { success: true });
      })
      .catch((err) => {
        res.status(400).send({ error: "Had an Error from Server" });
      });
  } catch (error) {
    const { name, message, stack } = error;
    console.log({ name, message, stack });
  }
});

router.get("/all", async (req, res) => {
  try {
    console.log("query.................... Job ");
    Job.find({})
      .then((getJob) => {
        res.status(200).send({ success: true, data: getJob });
      })
      .catch((e) =>
        res.status(404).send({ error: e.message + " from Server" })
      );
  } catch (error) {
    const { name, message, stack } = error;
    console.log({ name, message, stack });

    // res.status(500).send({ error: message + " From Server", status: 500 });
    // res.send({ name, message, stack });
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const id = req.params._id;
    const query = { ObjectId: new ObjectId(id) };
    console.log("query by id ..............", query);
    const getJob = await Job.findById(id).then((jobs) => jobs);
    if (getJob?._id) {
      res.status(200).send({ status: true, data: getJob });
    } else {
      console.log("not found in DB", query);
      res.status(404).send({ status: false, error: "Not found data" });
    }
  } catch (error) {
    const { name, message, stack } = error;
    console.log({ name, message, stack });
  }
});

module.exports = router;
