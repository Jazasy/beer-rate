const express = require("express");
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage });

const { getAllBeer, getBeer, getCountryBeer, addBeer } = require("../controllers/beerController")

const router = express.Router();

router.get("/", getAllBeer);

router.post("/", upload.single("image"), addBeer);

router.get("/countries/:country", getCountryBeer);

router.get("/:id", getBeer);

module.exports = router;