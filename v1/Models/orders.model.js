const mongoose = require("mongoose");
var validator = require("validator");

const ordersSchema = mongoose.Schema(
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
        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },

        where_is: {
            type: String,
            default: "cart",
            enum: {
                values: ["cart", "order", ],
                message: "{VALUE} is wrong. must be cart/order",
                default: "processing",
            },
        },

        // total_price: {
        //     type: Number,
        //     required: [true, "Price is required"],
        // },
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
        products: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Products",
                },
                img: {
                    type: String,
                    validate: [validator.isURL, "Please provide an URL"],
                },

                quantity: {
                    type: Number,
                },
                price: {
                    type: Number,
                },
            },
        ],
        customer: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customers",
        },
    },
    {
        timestamps: true,
    }
);

ordersSchema.index({ name: "text", email: "text" });

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;
