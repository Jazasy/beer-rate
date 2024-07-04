const Beer = require("../models/beer");
const Review = require("../models/review");

const addReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const foundBeer = await Beer.findById(id).populate("reviews");
        const newReview = new Review(req.body);
        foundBeer.reviews.push(newReview);
        foundBeer.save();
        newReview.save();
        res.json(foundBeer);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { addReview };