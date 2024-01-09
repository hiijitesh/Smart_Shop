const paymentSchema = monoose.Schema(
    {
        amount: {
            type: Number,
            require: true,
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        paidAt: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "DONE", "FAIL"],
        },
        mode: {
            type: String,
            enum: ["COD", "CARD", "UPI", "NET"],
        },
    },
    {
        timestamp: true,
    }
);
