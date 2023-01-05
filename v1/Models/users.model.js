const mongoose = require("mongoose");
var validator = require("validator");

const usersSchema = mongoose.Schema(
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
        profession: {
            // required: true,
            type: String,
        },
        gender: {
            // required: true,
            type: String,
            enum: {
                values: ["male", "female", "other"],
                message: "{VALUE} isn't valid. please select 'male', 'female', or 'other' ",
            },
        },
        phone: {
            // required: true,
            type: String,
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value, ["bn-BD"]);
                },
            },
            maxLength: 11,
            minLength: 11,
        },
        role: {
            // required: true,
            type: String,
            default: "user",
            enum: {
                values: ["admin", "moderator", "user"],
                message: "{VALUE} is wrong. must be admin/moderator/user",
            },
        },
        status: {
            // required: true,
            type: Boolean,
            default: true,
            
        },
        isVerified: {
            // required: true,
            type: Boolean,
            default: false,
        },
        address: {
            // required: true,
            type: String,
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Orders",
            },
        ],
    },
    {
        timestamps: true,
    }
);

usersSchema.index({ name: "text", email: "text", phone: "text" });

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
