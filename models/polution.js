const { Double } = require("mongodb");
const mongoose = require("mongoose");

const polutionModel = mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("pollutionData", polutionModel);
