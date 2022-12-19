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

// Routes require start


// Routes Start
app.use('/api/v1/users',usersRoute)




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