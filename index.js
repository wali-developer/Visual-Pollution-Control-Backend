const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const authRouter = require("./routes/auth");
const coordsRouter = require("./routes/coords");
const PORT = process.env.PORT || 5000;
app.use(cors(corsOptions));
app.use(express.json());

app.get("", (req, res) => {
  res.send("Server is working");
});

app.use("/auth", authRouter);
app.use("/coords", coordsRouter);

connectDB();

mongoose.connection.once("open", () => {
  console.log("DB connected.");
  app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`);
  });
});

mongoose.connection.once("error", () => {
  console.log("An error has occurred while connecting to the DB.");
});