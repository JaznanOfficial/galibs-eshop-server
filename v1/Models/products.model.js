const mongoose = require("mongoose");
var validator = require("validator");

const productsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        brand: {
            type: String,
            required: [true, "Brand is required"],
        },
        img: [
            {
                type: String,
                validate: [validator.isURL, "Please provide an URL"],
            },
        ],
        price: {
            type: Number,
            required:[true, "Price is required"]
        },
        quantity: {
            type: Number,
            required:[true, "quantity is required"]
        },
        ssd: {
            type: String,

            // enum: {
            //     values: ["120gb", "240gb", "500gb", "1tb"],
            //     message: "{VALUE} is wrong. must be 120gb/240gb/500gb/1tb",
            // },
        },
        hdd: {
            type: String,

            // enum: {
            //     values: ["500gb", "1tb"],
            //     message: "{VALUE} is wrong. must be 500gb/1tb",
            // },
        },
        ram: {
            type: String,

            // enum: {
            //     values: ["4GB", "8GB", "16GB"],
            //     message: "{VALUE} is wrong. must be 4GB/8GB/16GB",
            // },
        },
        status: {
            
            type: String,
            default: "published",
            enum: {
                values: ["published", "hidden"],
                message: "{VALUE} is wrong. must be published/hidden",
            },
        },
        monitor: {
            type: String,
        },
        processor: {
            type: String,
        },
        short_details: {
            type: String,
        },
        details_description: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

productsSchema.index({ name: "text", brand: "text" });

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
