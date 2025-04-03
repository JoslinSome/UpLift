const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        settings: {
            units: {
                type: String,
                enum: ["lbs", "kg"],
                default: "lbs"
            },
            goal: {
                type: String,
                default: ""
            }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
