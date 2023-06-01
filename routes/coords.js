const express = require("express");
const router = express.Router();
const uploadMidleware = require("../config/fileUpload");

const coordsController = require("../controllers/coords");

router.post("/analyze_image", uploadMidleware, coordsController.readCoordsFile);
router.get("/get_list", coordsController.getData);
module.exports = router;
