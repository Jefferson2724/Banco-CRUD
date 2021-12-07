const Usuario = require('../model/usuario');

module.exports = {
    //listar user
    async index(req,res){
        const usuarios = await Usuario.find(); // buscar todos
        res.status(200).json(usuarios);
    },

    // async usuarioExistente(_id, email){
    //     let usuario = null;
    //     if(_id){
    //         usuario = await Usuario.findOne({_id}); // pesquisa o usuario por id e se encontrar armazena no let
    //     }else{
    //         usuario = await Usuario.findOne({email}); // pesquisa o usuario email e se encontrar armazena no let
    //     }
    //     return usuario;

    // },

    async criar(req,res){
        //antes de criar um usuario ele pesquisa se já tem algum existente
        // const usuario = await usuarioExistente({email});

        // if(usuario) {
        //     return usuario; 
        // }
        //atribuindo valores
        const {nome, email, cep, cpf, idade, senha} = req.body; // pegando as requisições do body

        //recebe os valores do body
        let dateCreate = {}

        //inserindo os valores
        dateCreate = {
            nome, email, cep, cpf, idade, senha
        }
        const usuarios = await Usuario.create(dateCreate); // criar novo user
        res.status(200).json(usuarios)
    },

    async buscarPorId(req,res){
        const {_id} = req.params
        const usuarios = await Usuario.findOne({_id}); // buscar apenas um pelo id do mongo
        res.json(usuarios)
    },

    async deletar(req,res){
        const {_id} = req.params; // pegar por parametro 
        const usuarios = await Usuario.findOneAndDelete({_id}); // deletar  user
        res.json(usuarios)
    },

    async atualizar(req,res){
        const {_id, nome, email, cep, cpf, idade, senha} = req.body;  
        
        let dateCreate = {}
        
        dateCreate = { nome, email, cep, cpf, idade, senha} 

        const usuarios = await Usuario.findByIdAndUpdate({_id}, dateCreate, {new:true}); // update pelo id  
        res.json(usuarios)
    },

}