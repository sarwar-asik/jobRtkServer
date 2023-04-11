const { catchError } = require("../../error/catchError");
const job2 = require("../model/jobs");
const { bulkDeleteJob } = require("../services/job2.services");

exports.getJobs2 = async (req, res, next) => {
  try {
    const jobs = await job2.find({});

    res.status(200).json({ status: "success", data: jobs });
  } catch (error) {
    const { name, message, stack } = error;
    res.status(400).send({ status: "error", name, message, stack });
  }
};

exports.createJob = async (req, res, next) => {
  try {
    const result = await job2.create(req.body);
    // result.logger();

    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    const { name, message, stack } = error;

    res.status(400).send({ status: "error", name, message, stack });
  }
};

exports.updateJob2 = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    // throw {name:"myError",message:"dinku",stack:"stckssss"}
  } catch (error) {
    catchError(error, res);
  }
};

exports.deleteJob2 = async (req, res) => {
  try {
    const result = await bulkDeleteJob(req.body.ids);
    // res.send("wait bro/////////")
    res.status(200).json({ status: "success delete", data: result });

    console.log(req.body, "from delete/////////////////");
  } catch (error) {
    catchError(error, res);
  }
};
