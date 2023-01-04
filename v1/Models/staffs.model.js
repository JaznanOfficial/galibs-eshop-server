const mongoose = require("mongoose");
var validator = require("validator");

const staffsSchema = mongoose.Schema(
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
        
    },
    {
        timestamps: true,
    }
);

staffsSchema.index({ name: "text", email: "text", phone: "text" });

const Staffs = mongoose.model("Staffs", staffsSchema);

module.exports = Staffs;
