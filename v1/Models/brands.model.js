const mongoose = require("mongoose");
var validator = require("validator");

const brandSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        
        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },
        
        status: {
            // required: true,
            type: String,
            default: "active",
            enum: {
                values: ["active", "hidden"],
                message: "{VALUE} is wrong. must be active/hidden",
            },
        },
        
    },
    {
        timestamps: true,
    }
);

brandSchema.index({ name: "text" });

const Brands = mongoose.model("Brands", brandSchema);

module.exports = Brands;
