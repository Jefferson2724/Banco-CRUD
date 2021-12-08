const mongoose = require('mongoose')

//criando colunas da collection
const DataSchema = new mongoose.Schema({
    nome: String, 
    email: String,
    cep: Number,
    cpf: Number, 
    idade: Number, 
    senha: Number,
    balance:Number})

const usuario = mongoose.model('Usuario',DataSchema)//criando e nomeando a collection 


module.exports = usuario; // exportando para poder usar em outros lugares