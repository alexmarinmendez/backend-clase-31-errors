const express = require('express')
const validations = require('./src/validations')

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))
app.use(express.json())

app.post('/users', (req, res) => {
    validations.createUserValidation(req.body)
    return res.status(200).send({ status: 'ok '})
})

app.use((error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message
    })
})