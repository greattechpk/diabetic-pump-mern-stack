const express = require('express')
const globalModel = require('../models/global.js')
const globalRouter = express.Router()

// GET ALL Route
globalRouter.get('/', (req, res) => {
    globalModel.getAllGlobal()
        .then((allGlobal) => {
            res.json(allGlobal)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ALL Route
globalRouter.get('/admin', (req, res) => {
    globalModel.getAllGlobal()
        .then((allGlobal) => {
            res.json(allGlobal)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
globalRouter.get('/:id', (req, res) => {
    globalModel.getOneGlobal(req.params.id)
        .then((singleGlobal) => {
            res.json(singleGlobal)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// CREATE
globalRouter.post('/', (req, res) => {
    globalModel.createGlobal(req.body)
        .then((newGlobal) => {
            res.json(newGlobal)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
globalRouter.put('/:id', (req, res) => {
    globalModel.updateGlobal(req.params.id, req.body)
        .then(() => {
            res.json("ok")
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// DELETE
globalRouter.delete('/:id', (req, res) =>{
    globalModel.deleteGlobal(req.params.id)
        .then(() => {
            res.json("ok")
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = globalRouter