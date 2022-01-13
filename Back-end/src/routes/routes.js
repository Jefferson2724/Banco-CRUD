//externalizando rotas 
const express = require('express');
const usuarioController = require('../controller/usuarioController');
const verifyToken = require('../midlleware/usuarioMiddleware');
const Usuario = require('../model/usuario');
const NodeCache = require( "node-cache" );
const usuario = require('../model/usuario');
const cache = new NodeCache({ stdTTL: 10 }); 
/*var cors = require('cors');
var app = express();

app.use((req, res, next) =>{
    console.log("acessei aqui ó"); 
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
  });*/
// recurso do expresse para criar um arquivo de rotas 
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: "Conectado" })
})


routes.get('/user', usuarioController.index);// chamada para pegar os users dentro da controller
routes.post('/authenticate', usuarioController.authenticate); // chamada para autenticar
routes.post('/login', verifyToken, usuarioController.login); // chamada do login 
routes.post('/registerUser', usuarioController.create);// chamada para inserir 
routes.get('/user/:_id', usuarioController.read);// chamada para buscar um usuario pelo cpf ou buscar todos
routes.delete('/deleteUser/:_id', verifyToken, usuarioController.delete);//apagar por id
routes.put('/updateProfile', verifyToken, usuarioController.update); //atualizar
routes.put('/deposit', verifyToken, usuarioController.deposit);
routes.put('/withdraw', verifyToken, usuarioController.withdraw);
routes.put('/transferring', verifyToken, usuarioController.transferring);

module.exports = routes;