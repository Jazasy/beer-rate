const express = require("express");

const { getAllBeer, getBeer, getCountryBeer} = require("../controllers/beerController")

const router = express.Router();

router.get("/", getAllBeer);

router.get("/countries/:country", getCountryBeer);

router.get("/:id", getBeer);

module.exports = router;