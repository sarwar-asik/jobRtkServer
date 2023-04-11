const job2 = require("../model/jobs");

exports.bulkDeleteJob = async (ids) => {
  const result = await job2.deleteMany({ id: ids });
  return result;
};
