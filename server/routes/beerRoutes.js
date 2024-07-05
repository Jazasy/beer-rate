const express = require("express");
const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage });

const { getAllBeer, getBeer, getCountryBeer, addBeer } = require("../controllers/beerController");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

router.get("/", catchAsync(getAllBeer));

router.post("/", upload.single("image"), catchAsync(addBeer));

router.get("/countries/:country", catchAsync(getCountryBeer));

router.get("/:id", catchAsync(getBeer));

module.exports = router;