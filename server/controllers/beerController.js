const Beer = require("../models/beer");

const test = (req, res) => {
    res.json("test is working");
}

const getAllBeer = async (req, res) => {
    try {
        const allBeer = await Beer.find().populate("reviews");
        res.json(allBeer);
    } catch (error) {
        console.log(error);
    }

}

const getBeer = async (req, res) => {
    try {
        const { id } = req.params;
        const foundBeer = await Beer.findOne({ _id: id }).populate("reviews");
        res.json(foundBeer);
    } catch (error) {
        console.log(error);
    }
}

const getCountryBeer = async (req, res) => {
    try {
        const { country } = req.params;
        const countryBeer = await Beer.find({ country }).populate("reviews");
        res.json(countryBeer);
    } catch (error) {
        console.log(error);
    }
}

const addBeer = async (req, res) => {
    try {
        const { name, description, country } = req.body;
        const newBeer = new Beer({ name, description, country: country.toLowerCase() });
        newBeer.image = req.file;
        await newBeer.save();
        res.json(newBeer);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    getAllBeer,
    getBeer,
    getCountryBeer,
    addBeer
}