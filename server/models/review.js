const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    name: String,
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: 1,
        max: 5
    },
    note: String
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

module.exports = ReviewModel;