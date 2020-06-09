const express = require('express')
const globalRouter = require('./controllers/global')
const insulinRouter = require('./controllers/insulin')
const nutritionRouter = require('./controllers/nutrition')
const app = express()


app.use(express.urlencoded({extended: true}))

app.use(express.json())


app.use(express.static(`${__dirname}/client/build`))

app.use('/api/nutrition', nutritionRouter)
app.use('/api/settings', globalRouter)
app.use('/api', insulinRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})