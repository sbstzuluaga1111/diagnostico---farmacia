const mongoose = require('mongoose')
const { Schema } = mongoose

const MedicamentoShema = new Schema({
    nombre: String,
})

const medica1 = mongoose.model('medicamentos', MedicamentoShema)

module.exports = medica1