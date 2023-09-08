const mongoose = require('mongoose')
const { Schema } = mongoose

const provedorShema = new Schema({
    nombre: String,
})

const medica11 = mongoose.model('proveedores', provedorShema)

module.exports = medica11