const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    name:{
        type:String
    },
    salary:{
        type:String
    },
})

module.exports = jobSchema