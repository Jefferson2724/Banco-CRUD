const mongoose = require('mongoose')

//criando nova collection
const DataSchema = new mongoose.Schema({
    nome: String, 
    email: String,
    cep: Number,
    cpf: Number, 
    idade: Number, 
    senha: Number
})

const usuario = mongoose.model('Usuario',DataSchema)


module.exports = usuario;