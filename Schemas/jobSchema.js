const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  position: {
    type: String,
  },
  experience: {
    type: String,
  },
  location: {
    type: String,
  },
  company: {
    type: String,
  },
  skills: {
    type: String,
  },
  workplace: {
    type: String,
  },
  overview: {
    type: String,
  },
});

module.exports = jobSchema;
