const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors = require("colors")





const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_ATLAS, {
        dbName:"G-shop"
    })
        .then(() => {
        console.log(`db connected successfully`.white.bgGreen.bold)
        }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = dbConnect;