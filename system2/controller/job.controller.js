const job2 = require("../model/jobs");

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
    const result = await job2.create(req.body)
    result.logger()
  } catch (error) {
    const { name, message, stack } = error;

    res.status(400).send({ status: "error", name, message, stack });
  }
};
