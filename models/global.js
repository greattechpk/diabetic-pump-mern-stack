const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const globalSchema = new Schema({
    carbRatio: Number,
    correctionSubtract:Number,
    correctionDivisor:Number,
    activeInsulin: Number,
    activeInsulinTimer: Number,
    insulinType: String,
    insulinActivityLength: Number
})

const globalCollection = mongoose.model('global', globalSchema)

// GET/READ ALL
function getAllGlobal() {
    return globalCollection.find()
}

// GET/READ ONE
function getOneGlobal(id) {
    return globalCollection.findById(id)
}

// Get 1st

function getFirstGlobal(){
    return globalCollection.findOne()
}

// CREATE
function createGlobal(newGlobal) {
    return globalCollection.create(newGlobal)
}

// UPDATE
function updateGlobal(id, newGlobal) {
    return globalCollection.findByIdAndUpdate(id, newGlobal)
}

// DELETE
function deleteGlobal(id) {
    return globalCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneGlobal,
    getAllGlobal,
    getFirstGlobal,
    createGlobal,
    updateGlobal,
    deleteGlobal
}