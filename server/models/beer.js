const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("../models/review");

const opts = { toJSON: { virtuals: true } };

const BeerSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    image: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
}, opts);

BeerSchema.virtual("rating").get(function () {
    if(this.reviews.length === 0) return 0;
    let sum = 0;
    this.reviews.forEach(review => sum+=review.rating);
    return sum / this.reviews.length;
})

const BeerModel = mongoose.model("Beer", BeerSchema);

module.exports = BeerModel;