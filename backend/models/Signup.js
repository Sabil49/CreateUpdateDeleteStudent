const mongoose = require("mongoose");

let signupSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: Number,
        },
    }
);

const Signup = mongoose.model("signup", signupSchema);
module.exports = Signup;