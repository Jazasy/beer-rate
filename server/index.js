const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const beerRoutes = require("./routes/beerRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/beer-rate")
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log("Database Connection Failed", error))

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/beers", beerRoutes);
app.use("/reviews", reviewRoutes);

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));