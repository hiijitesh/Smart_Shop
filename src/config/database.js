/* eslint-disable no-console */
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
exports.connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((con) =>
            console.log(
                "Database Connected to the E-Commerce Collection ✅✅✅ "
            )
        )
        .catch((err) => console.log(err));
};
