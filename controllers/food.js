const express = require('express')
const foodModel = require('../models/food.js')

const foodRouter = express.Router()

// GET ALL Route
foodRouter.get('/', (req, res) => {
    foodModel.getAllFood()
        .then((allFood) => {
            res.json(allFood)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// GET ONE
foodRouter.get('/:id', async (req, res) => {
    console.log('foodRouter.GET one route')
    try {
        const singleFood = await foodModel.getOneFood(req.params.id)
        res.json(singleFood)
    } catch (err) {
        console.log(err)
        res.json(err)
    }

})

// CREATE
foodRouter.post('/', (req, res) => {
    foodModel.createFood(req.body)
        .then(() => {
            res.json('ok')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
foodRouter.put('/:id', (req, res) => {
    foodModel.updateFood(req.params.id, req.body)
        .then(() => {
            res.json(`ok`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
foodRouter.delete('/:id', (req, res) =>{
    foodModel.deleteFood(req.params.id)
        .then(() => {
            res.json('ok')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = foodRouter