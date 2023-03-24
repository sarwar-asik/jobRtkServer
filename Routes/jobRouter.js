const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jobSchema = require("../Schemas/jobSchema");
const Job = new mongoose.model("JOB", jobSchema);

router.post("/addJob", async (req, res) => {
  const newJob = new Job(req.body);
  //   console.log(newJob, "from body");
  const result = await Job.create(newJob);
  if (result) {
    res.send({ success: true });
  } else {
    res.send({ error: "Occurred an Error" });
  }
});

module.exports = router;
