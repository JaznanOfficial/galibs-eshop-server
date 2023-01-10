const mongoose = require("mongoose");
var validator = require("validator");

const couponsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Campaign Name is required"],
        },
        code: {
            type: String,
            required: [true, "Code is required"],
            unique: [true, "Email must be unique"],
        },
        percent: {
            type: Number,
        },
        starting_date: {
            type: Date,
            default: Date.now()
        },
        ending_date: {
            type: Date,
            default: Date.now()
        },

        status: {
            // required: true,
            type: Boolean,
            default: true,
            
        },
    },
    {
        timestamps: true,
    }
);

couponsSchema.index({ name: "text" });

const Coupons = mongoose.model("coupons", couponsSchema);

module.exports = Coupons;
