const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  email: {
    type: String,
    required: false,
    trim: true,
    unique: 1
  },

  password: {
    type: String,
    required: false,
    minlength: 4,
    trim: true
  },

  companyName: {
    type: String,
    required: false,
    maxlength: 100,
    trim: true
  },

  ceo: {
    type: String,
    required: false,
    maxlength: 15,
    trim: true
  },

  role: {
    type: String,
    required: false
  }
});

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };
