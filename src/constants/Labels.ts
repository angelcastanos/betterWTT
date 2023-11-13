const Labels = {
    forms: {
        products: {
            name: 'Nombre',
            description: 'Descripción',
            price: 'Precio',
            image: 'Imagen',
            stock: 'Existencias',
            submit: 'Guardar',
        }
    },
    formErrors: {
        required: 'Este campo es requerido',
        invalid: 'Este campo es inválido',
        minLength: 'Este campo debe tener al menos {0} caracteres',
        maxLength: 'Este campo debe tener como máximo {0} caracteres',
        minNumber: 'Este campo debe tener como mínimo {0}',
        maxNumber: 'Este campo debe tener como máximo {0}',
        isImage: 'Este campo debe ser una imagen',
    },
    

};

Object.freeze(Labels);

export default Labels;