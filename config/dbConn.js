const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saliheenafridi:iozdYrnwJyBPRKrt@cluster1.a0rwpce.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

// mongdb password iozdYrnwJyBPRKrt
