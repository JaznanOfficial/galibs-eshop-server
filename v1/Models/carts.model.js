const mongoose = require("mongoose");
var validator = require("validator");

const cartsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email must be unique"],
            validate: [validator.isEmail, "Please provide a valid email"],
        },
        img: [
            {
                type: String,
                validate: [validator.isURL, "Please provide an URL"],
            },
        ],
        total_price: {
            type: Number,
            required: [true, "Price is required"],
        },
        payment_method: {
            type: String,
        },

        status: {
            type: String,
            default: "processing",
            enum: {
                values: ["pending", "processing", "shipping", "delivered", "cancel"],
                message: "{VALUE} is wrong. must be processing/pending/shipping/delivered/cancel",
                default: "processing",
            },
        },
        discount: {
            type: Number,
        },
        products: [{
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products",
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number
            }
        }],
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customers",
        },
    },
    {
        timestamps: true,
    }
);

cartsSchema.index({ name: "text", email: "text" });

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
