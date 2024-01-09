const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                quantity: {
                    type: Number,
                    required: true,
                },
                product: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product",
                    required: true,
                },
            },
        ],
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        addressId: {
            type: mongoose.Schema.ObjectId,
            ref: "Address",
            required: true,
        },
        paymentId: {
            type: mongoose.Schema.ObjectId,
            ref: "Payment",
        },
        itemsPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        orderStatus: {
            type: String,
            required: true,
            default: "Processing",
        },
        deliveredAt: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);
