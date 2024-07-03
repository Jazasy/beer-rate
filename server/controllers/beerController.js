const Beer = require("../models/beer");

const test = (req, res) => {
    res.json("test is working");
}

const getAllBeer = async (req, res) => {
    const allBeer = await Beer.find().populate("reviews");
    res.json(allBeer);
}

const getBeer = async (req, res) => {
    const { id } = req.params;
    const foundBeer = await Beer.findOne({ _id: id }).populate("reviews");
    res.json(foundBeer);
}

const getCountryBeer = async (req, res) => {
    const { country } = req.params;
    const countryBeer = await Beer.find({ country }).populate("reviews");
    res.json(countryBeer);
}

const addBeer = async (req, res) => {
    const {name, description, country} = req.body;
    console.log(name, description, country);
    console.log(req);
    
}

module.exports = {
    test,
    getAllBeer,
    getBeer,
    getCountryBeer,
    addBeer
}