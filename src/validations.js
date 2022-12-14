const yup = require('yup')

const createUserValidation = (data) => {
    const schema = yup.object().shape({
        name: yup.string().min(5).matches(/^[a-z]+$/).required()
    })
    schema.validateSync(data)
}

module.exports = {
    createUserValidation
}