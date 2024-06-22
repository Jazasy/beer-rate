const express = require("express");

const { test, getAllBeer } = require("../controllers/indexController")

const router = express.Router();

router.get("/", getAllBeer);

module.exports = router;