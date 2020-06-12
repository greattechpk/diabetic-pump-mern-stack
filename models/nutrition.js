const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const nutritionSchema = new Schema({
    date: Date,
    totalCarbs: Number,
    fat: Number,
    protein: Number
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
    let currentdate = new Date(); //src https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
    newNutrition.date = currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log("model worked")
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