const mongoose = require("mongoose");

let LoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: Number,
        },

    },
    {
        timestamps: true,
    }
);

const Login = mongoose.model("login", LoginSchema);
module.exports = Login;