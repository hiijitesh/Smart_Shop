const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        ratings: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Review", reviewSchema);
