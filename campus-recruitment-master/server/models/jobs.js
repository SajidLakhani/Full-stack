const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  ceo: {
    type: String,
    required: false,
    trim: true,
    maxlength: 15
  },
  
  position: {
    type: String,
    required: false,
    trim: true
  },

  description: {
    type: String,
    required: false
  },

  companyName: {
    type: String,
    required: false,
    trim: true,
    maxlength: 20
  },

  salary: {
    type: Number,
    required: false,
    trim: true
  },

  date: {
    type: "String",
    required: false,
    trim: true
  }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = { Jobs };
