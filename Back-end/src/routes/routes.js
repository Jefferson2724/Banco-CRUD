//externalizando rotas 
const express = require ('express');
const usuarioController = require('../controller/usuarioController');
const verifyToken = require('../midlleware/usuarioMiddleware');

// recurso do expresse para criar um arquivo de rotas 
const routes = express.Router();

routes.get('/', (req,res)=>{
    res.json({message:"Conectado"})
})


routes.get('/user',  usuarioController.index);// chamada para pegar os users dentro da controller
routes.post('/authenticate', usuarioController.authenticate); // chamada do login 
routes.post('/login', verifyToken, usuarioController.login);
routes.post('/registerUser', usuarioController.create);// chamada para inserir 
routes.get('/user/:_id', usuarioController.read);// chamada para buscar um usuario pelo cpf ou buscar todos
routes.delete('/deleteUser/:_id', verifyToken, usuarioController.delete);//apagar por id
routes.put('/updateProfile', verifyToken, usuarioController.update ); //atualizar

module.exports = routes;