//const  requestLogin  = require  ('../controller/usuarioAutenticacao');

const express = require ('express');
const usuarioController = require('../controller/usuarioController');

const routes = express.Router();

routes.get('/', (req,res)=>{
    res.json({message:"Conectado"})
})

//routes.get('/login', requestLogin.requestLogin)
routes.get('/user', usuarioController.index)// chamada para pegar os users dentro da controller
routes.post('/user', usuarioController.criar)// chamada para inserir 
routes.get('/user/:_id',usuarioController.buscarPorId)// chamada para buscar um usuario pelo id
routes.delete('/user/:_id',usuarioController.deletar)//apagar por id
routes.put('/user',usuarioController.atualizar ) //atualizar 
module.exports = routes;