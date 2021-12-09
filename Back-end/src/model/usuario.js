const mongoose = require('mongoose')

//criando fields da collection
const DataSchema = new mongoose.Schema({
    name: String, 
    email: String,
    cep: Number,
    cpf: Number, 
    age: Number, 
    password: Number,
    balance: Number,
})

const usuario = mongoose.model('Usuario',DataSchema)//criando e nomeando a collection 


module.exports = usuario; // exportando para poder usar em outros lugares