const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const nutritionSchema = new Schema({
    date: String,
    totalCarbs: Number,
    totalCholesterol: Number,
    fat: Number,
    iron: Number,
    protein: Number,
    sugar: Number
})

const nutritionCollection = mongoose.model('nutrition', nutritionSchema)

// GET/READ ALL
function getAllNutrition() {
    return nutritionCollection.find()
}

// GET/READ ONE
function getOneNutrition(id) {
    return nutritionCollection.findById(id)
}

// Get 1st

function getFirstNutrition(){
    return nutritionCollection.findOne()
}

// CREATE
function createNutrition(newNutrition) {
    return nutritionCollection.create(newNutrition)
}

// UPDATE
function updateNutrition(id, newNutrition) {
    return nutritionCollection.findByIdAndUpdate(id, newNutrition)
}

// DELETE
function deleteNutrition(id) {
    return nutritionCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneNutrition,
    getAllNutrition,
    getFirstNutrition,
    createNutrition,
    updateNutrition,
    deleteNutrition
}