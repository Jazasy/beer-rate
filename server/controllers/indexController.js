const Beer = require("../models/beer");

const test = (req, res) => {
    res.json("test is working");
}

const getAllBeer = async (req, res) => {
    const allBeer = await Beer.find();
    res.json(allBeer);
}

module.exports = {
    test,
    getAllBeer,
}