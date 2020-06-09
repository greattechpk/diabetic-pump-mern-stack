const express = require('express')
const insulinModel = require('../models/insulin.js')
const insulinRouter = express.Router()

// GET ALL Route
insulinRouter.get('/', (req, res) => {
    insulinModel.getAllInsulin()
        .then((allInsulin) => {
            res.json(allInsulin)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})
// GET ALL Route Admin
insulinRouter.get('/admin', (req, res) => {
    insulinModel.getAllInsulin()
        .then((allInsulin) => {
            res.json(allInsulin)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// GET ONE
insulinRouter.get('/:id', (req, res) => {
    insulinModel.getOneInsulin(req.params.id)
        .then((singleInsulin) => {
            res.json(singleInsulin)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
insulinRouter.post('/', (req, res) => {
    insulinModel.createInsulin(req.body)
        .then(() => {
            res.json('ok')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
insulinRouter.put('/:id', (req, res) => {
    insulinModel.updateInsulin(req.params.id, req.body)
        .then(() => {
            res.json(`ok`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// DELETE
insulinRouter.delete('/:id', (req, res) =>{
    insulinModel.deleteInsulin(req.params.id)
        .then(() => {
            res.jso('/ok')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = insulinRouter