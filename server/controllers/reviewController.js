const Beer = require("../models/beer");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");

const addReview = async (req, res) => {
    if(!req.body.rating) throw new ExpressError("Rating is required", 422);
    const { id } = req.params;
    const foundBeer = await Beer.findById(id).populate("reviews");
    if(!foundBeer) throw new ExpressError("No Beer Found", 404);
    const newReview = new Review(req.body);
    foundBeer.reviews.push(newReview);
    foundBeer.save();
    newReview.save();
    res.json(foundBeer);
}

module.exports = { addReview };