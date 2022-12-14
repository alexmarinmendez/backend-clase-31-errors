const express = require('express')

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))
app.use(express.json())

app.post('/users', (req, res) => {
    const { name, age, email } = req.body

    if (!name) {
        return res.status(400).send({ error: 'name is required' })
    }
    if (typeof name !== 'string') {
        return res.status(400).send({ error: 'name must be a string' })
    }
    if (name.length < 5) {
        return res.status(400).send({ error: 'name must be at least 5 characters long' })
    }
    if (!/^[a-z]+$/i.test(name)) {
        return res.status(400).send({ error: 'name must contains only a-z characters' })
    }

    return res.status(200).send({ status: 'ok '})
})