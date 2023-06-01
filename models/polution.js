const mongoose = require("mongoose");

const polutionModel = mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: false,
  },
  longitude: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("pollutionData", polutionModel);
