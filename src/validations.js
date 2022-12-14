const yup = require('yup')

const createUserValidation = (data) => {
    const schema = yup.object().shape({
        // name: yup.string().min(5).matches(/^[a-z]+$/).required()
        name: yup
            .string('El campo name debe ser un string')
            .min(5, 'El campo name debe ser como mínimo de 5 caracteres de longitud')
            .matches(/^[a-z]+$/, 'El campo name debe contener unicamente letras de la a-z')
            .required('El campo name es obligatorio')
    })
    schema.validateSync(data)
}

module.exports = {
    createUserValidation
}