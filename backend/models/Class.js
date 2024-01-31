const mongoose = require("mongoose");

let classSchema = new mongoose.Schema(
    {
        class: {
            type: String,
        },
        students: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "students",
        },
    }
);

const Class = mongoose.model("class", classSchema);
module.exports = Class;