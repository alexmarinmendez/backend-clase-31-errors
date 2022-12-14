const createUserValidation = (data) => {
    const { name, age, email } = data
    
    if (!name) {
        // return res.status(400).send({ error: 'name is required' })
        throw new Error('name is required')
    }
    if (typeof name !== 'string') {
        // return res.status(400).send({ error: 'name must be a string' })
        throw new Error('name must be a string')
    }
    if (name.length < 5) {
        // return res.status(400).send({ error: 'name must be at least 5 characters long' })
        throw new Error('name must be at least 5 characters long')
    }
    if (!/^[a-z]+$/i.test(name)) {
        // return res.status(400).send({ error: 'name must contains only a-z characters' })
        throw new Error('name must contains only a-z characters')
    }

}

module.exports = {
    createUserValidation
}