const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const beerRoutes = require("./routes/beerRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const ExpressError = require("./utils/ExpressError");

const app = express();

const dbUrl = process.env.DB_URL;
/* "mongodb://127.0.0.1:27017/beer-rate" */
mongoose.connect(dbUrl)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log("Database Connection Failed", error))

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/beers", beerRoutes);
app.use("/reviews", reviewRoutes);

app.all("*", (req, res, next) => {
    next(new ExpressError("Page not found", 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).send(message);
})

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));