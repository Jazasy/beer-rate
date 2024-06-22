const Beer = require("../models/beer");
const Review = require("../models/review")

const getBeer = async (req, res) => {
    const { id } = req.params;
    const foundBeer = await Beer.findOne({ _id: id }).populate("reviews");
    res.json(foundBeer);
}

const addReview = async (req, res) => {
    const { id } = req.params;
    const foundBeer = await Beer.findById(id);
    const newReview = new Review(req.body);
    foundBeer.reviews.push(newReview);
    foundBeer.save();
    console.log(foundBeer);
}

module.exports = {
    getBeer,
    addReview
}