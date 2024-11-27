const Housing = require("../models/housing");

const Index = async (req,res) => {
    try {
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(400).json({message: "Collection is Empty"})
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error});
    }
}

const getHousingById = async (req, res) => {
    try {
        const { id } = req.params;
        const housing = await Housing.findOne({ id: id });
        if (!housing) {
            return res.status(400).json({ message: "Housing not found" });
        }
        res.status(200).json(housing);
    } catch (error) {
        res.status(500).json({ message: "Error fetching housing data", error });
    }
};



module.exports = { Index, getHousingById }