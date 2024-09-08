//imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes= require("./routes/userRoutes")

//env handler
dotenv.config();


//Middleware
app.use(express.json());


//connect to database
connectDB();


// connecting to routes
app.use("/api", userRoutes)


//main port
const PORT = process.env.PORT || 5678;


app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`.bgWhite.bold);
});

