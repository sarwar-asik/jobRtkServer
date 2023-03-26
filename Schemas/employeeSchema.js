const mongoose = require("mongoose");
const employeeSchemas = mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  email: {
    type: String,
  },
  employeeNumber: {
    type: String,
  },
  CompanyRole: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = employeeSchemas;
