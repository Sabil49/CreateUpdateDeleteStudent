const mongoose = require("mongoose");

let projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
        },
        completes: {
            type: Number,
        },
        terminates: {
            type: Number,
        },
        OQ: {
            type: Number,
        },
        qualityTerm: {
            type: String,
        },
        numberofPartners: {
            type: Number,
        },
        currentStatus: {
            type: String,
        },
        surveylink: {
            type: String,
        },
        testlink: {
            type: String,
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
        },
        cpi: {
            type: String,
        },
        countries: {
            type: String,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        requiredCompletes: {
            type: Number,
        },
        incidenceRate: {
            type: Number,
        },
        LOI: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("project", projectSchema);
module.exports = Project;