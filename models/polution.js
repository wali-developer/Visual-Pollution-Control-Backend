const mongoose = require("mongoose");

const polutionModel = mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("pollutionData", polutionModel);
