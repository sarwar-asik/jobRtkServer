const express = require('express')
const router =  express.Router()
const job2Controller = require("../controller/job.controller")

router.route("/")
.get(job2Controller.getJobs2)
.post(job2Controller.createJob)

router.route("/addJob")
.post(job2Controller.updateJob2)

module.exports = router