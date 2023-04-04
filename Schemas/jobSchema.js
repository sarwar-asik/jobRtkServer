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
    type: Array,
  },
  workPlace: {
    type: String,
  },
  overView: {
    type: String,
  },
});

module.exports = jobSchema;
