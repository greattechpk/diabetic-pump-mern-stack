const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const insulinSchema = new Schema({
    bloodGlucose: Number,
    totalCorrection: Number,
    fixedCorrection: Number,
    foodItems: Array,
    totalCarbs: Number,
    totalFoodDelivery: Number,
    deliveryType: String,
    totalDelivery: Number,
    deliveryTime: Date
})

const insulinCollection = mongoose.model('insulin', insulinSchema)

// GET/READ ALL
function getAllInsulin() {
    return insulinCollection.find()
}

// GET/READ ONE
function getOneInsulin(id) {
    return insulinCollection.findById(id)
}

// CREATE
function createInsulin(newInsulin) {
    var currentdate = new Date(); //src https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
    newInsulin.deliveryTime = currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    return insulinCollection.create(newInsulin)
}

// UPDATE
function updateInsulin(id, newInsulin) {
    return insulinCollection.findByIdAndUpdate(id, newInsulin)
}

// DELETE
function deleteInsulin(id) {
    return insulinCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneInsulin,
    getAllInsulin,
    createInsulin,
    updateInsulin,
    deleteInsulin
}