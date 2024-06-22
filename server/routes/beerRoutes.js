const express = require("express");

const { getAllBeer, getBeer} = require("../controllers/beerController")

const router = express.Router();

router.get("/", getAllBeer);

router.get("/:id", getBeer);

module.exports = router;