const mongoose = require("mongoose");
// const validator = require('validator');
const jobSchema2 = mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, "Please Provide a position"],
      trim: true,
      // unique:[true,"Please provide another position"],
      minLength: [2, "Provide more text"],
      maxLength: [20, "It is too much text"],
    },
    experience: {
      type: Number,
      required: [true, "Can not publish without experience"],
      min: [0, "Can not with Negative"],
      max: [10, "it is not available "],
      // enum:["kg","litre","pcs"],
      // //  or ===>
      // enum:{
      //   values:["kg","litre","pcs"],
      //   message:"unit value cannot without kg/litre/pcs"
      // },
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return { message: "thik ache" };
          } else {
            return { message: "thik nai" };
          }
        },
        message: "experience must be integer",
      },
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
    updateTime: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// jobSchema2.pre("save",function(next){

// })

jobSchema2.method.logger = function () {
  console.log(`Job saved fro ${this.position}`);
};

const job2 = mongoose.model("job", jobSchema2);

module.exports = job2;
