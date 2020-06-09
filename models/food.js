const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name: String,
    carbValue: Number,
    isBeverage: Boolean
})

const foodCollection = mongoose.model('food', foodSchema)

// GET/READ ALL
function getAllFood() {
    return foodCollection.find()
}

// GET/READ ONE
function getOneFood(id) {
    return foodCollection.findById(id)
}

// CREATE
function createFood(newFood) {
    return foodCollection.create(newFood)
}

// UPDATE
function updateFood(id, newFood) {
    return foodCollection.findByIdAndUpdate(id, newFood)
}

// DELETE
function deleteFood(id) {
    return foodCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneFood,
    getAllFood,
    createFood,
    updateFood,
    deleteFood
}