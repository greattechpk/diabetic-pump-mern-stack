const express = require('express')
const nutritionModel = require('../models/nutrition.js')
const nutritionRouter = express.Router()

// GET ALL Route
nutritionRouter.get('/', (req, res) => {
    nutritionModel.getAllNutrition()
        .then((allNutrition) => {
            res.json(allNutrition)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ALL Route
nutritionRouter.get('/admin', (req, res) => {
    nutritionModel.getAllNutrition()
        .then((allNutrition) => {
            res.json(allNutrition)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
nutritionRouter.get('/:id', (req, res) => {
    nutritionModel.getOneNutrition(req.params.id)
        .then((singleNutrition) => {
            res.json(singleNutrition)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// CREATE
nutritionRouter.post('/', (req, res) => {
    nutritionModel.createNutrition(req.body)
        .then((newNutrition) => {
            res.json(newNutrition)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
nutritionRouter.put('/:id', (req, res) => {
    nutritionModel.updateNutrition(req.params.id, req.body)
        .then(() => {
            res.json("ok")
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// DELETE
nutritionRouter.delete('/:id', (req, res) =>{
    nutritionModel.deleteNutrition(req.params.id)
        .then(() => {
            res.json("ok")
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = nutritionRouter