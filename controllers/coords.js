const polutionModel = require("../models/polution");
const dummydata = require("../dumyData");
const cloudinary = require("cloudinary").v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: "dfjfmkeha",
  api_key: "889875147537854",
  api_secret: "O2NOsf5pgcjimwkbjxeh0-hfCI0",
});


const readCoordsFile = async (req, res) => {
  const image_url = req.file.path;
  const cloudinaryRes = cloudinary.uploader.upload(image_url, {
    public_id: "funadiq",
  });

  const { latitude, longitude, address } = req.body;
  try {

    cloudinaryRes
      .then(async (data) => {

        const result = await polutionModel.collection.insertOne({
          image_url: data.secure_url,
          latitude: latitude,
          longitude: longitude,
          address: address,
        });
        console.log(result);
        res.status(200).json({
          msg: "Data uploaded succesfully",
        });


      }).catch((err) => {
        res.send({ msgErr: "An error has ocurred." })
      });



  } catch (error) { }
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
