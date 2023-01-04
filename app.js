const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");
const dbConnect = require("./utils/dbConnect");
dbConnect()

app.use(cors())
app.use(express.json())


// Routes require start

const usersRoute = require("./v1/Routes/users.route")
const productsRoute = require("./v1/Routes/products.route")
const brandsRoute = require("./v1/Routes/brands.route")
const staffsRoute = require("./v1/Routes/staffs.route")
const couponsRoute = require("./v1/Routes/coupons.route")
const ordersRoute = require("./v1/Routes/orders.route")
const cartsRoute = require("./v1/Routes/carts.route")

// Routes require start


// Routes Start
app.use('/api/v1/users',usersRoute)
app.use('/api/v1/products',productsRoute)
app.use('/api/v1/brands',brandsRoute)
app.use('/api/v1/staffs',staffsRoute)
app.use('/api/v1/coupons',couponsRoute)
app.use('/api/v1/orders',ordersRoute)
app.use('/api/v1/carts',cartsRoute)




// Routes End





















app.get("/", (req, res) => {
    try {
        res.send("<h1>Welcome to Galib's E-shop server</h1>")
    } catch (error) {
       console.log(error.message) 
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;