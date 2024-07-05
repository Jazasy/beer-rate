const express = require("express");
const { addReview } = require("../controllers/reviewController");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

router.post("/:id", catchAsync(addReview))

module.exports = router;