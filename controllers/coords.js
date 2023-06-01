const polutionModel = require("../models/polution");
const dummydata = require("../dumyData");

const readCoordsFile = async (req, res) => {
  const image_url = req.file.path;
  const { latitude, longitude, address } = req.body;
  try {
    const result = await polutionModel.collection.insertOne({
      image_url: image_url,
      latitude: latitude,
      longitude: longitude,
      address: address,
    });
    console.log(result);
    res.status(200).json({
      msg: "Data uploaded succesfully",
    });
  } catch (error) {}
};

const getData = async (req, res) => {
  try {
    const data = await polutionModel.find();
    const result = data.map((item) => {
      let rand = Math.random();
      let randLower = Math.floor(rand * dummydata.length * 0.1);
      let randUper = Math.floor(rand * dummydata.length);
      return {
        info: item,
        analyzed_data: dummydata.slice(randLower, randUper),
      };
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { readCoordsFile, getData };
