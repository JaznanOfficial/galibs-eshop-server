const mongoose = require("mongoose");
var validator = require("validator");

const brandSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
        },

        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
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

brandSchema.index({ name: "text" });

const Brands = mongoose.model("Brands", brandSchema);

module.exports = Brands;
