const express = require("express");

const { getBeer, addReview } = require("../controllers/individualController")

const router = express.Router();

router.get("/:id", getBeer);

router.post("/:id", addReview)

module.exports = router;