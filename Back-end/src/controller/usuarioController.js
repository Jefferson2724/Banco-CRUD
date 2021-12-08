const Usuario = require('../model/usuario'); //acesso ao model de user, permitindo interações com o banco
const jwt  = require('jsonwebtoken');
const SECRET = 'desenvolvimentowebe';

module.exports = {
    //listar user, passando como função async para respeitar o tempo de ação do ponto da rota   
    async index(req,res){
        const usuarios = await Usuario.find(); // buscar todos, await para esperar a requisição terminar
        res.status(200).json(usuarios); // retorna o json com os usuarios encontrados 
    },

    async login(req,res){
             const {_id, email, senha} = req.body;

            // // verificando se não tem nenhum campo vazio, se tiver retorna status 400 (solicitação inválida)
             if(!_id || !email || !senha){
                 res.status(400).json({error:'Preencha todos os campos'})
             }

            let logando = {} 

             logando = {email, senha}
            const usuarios = await Usuario.findOne({_id},logando);
            res.status(201).json(usuarios) // status 201 para informar que um novo recurso foi criado 
        },

    async authenticate(req,res){
            const { email, senha} = req.body;

            const usuario = await Usuario.findOne({ email, senha});

            if(!usuario) return res.status(401).json({message: 'User not found'});

            const {_id} = usuario;

            const token = jwt.sign({userId: _id,}, SECRET,{expiresIn:86400}
            );
            
            return res.send({usuario, token});

    },

    async create(req,res){
        try{ 
            const {nome, email, cep, cpf, idade, senha} = req.body; // pegando dados da requisição
        
            let dateCreate = {} //recebe os valores do body

            
            if(!nome || !email || !cep || !cpf || !idade || !senha) {
            res.status(400).json({error:'Preencha todos os campos'})
            }
            //inserindo os valores
            dateCreate = { nome, email, cep, cpf, idade, senha }
            const usuarios = await Usuario.create(dateCreate); // criar novo user
            res.status(201).json(usuarios) // status 201 para informar que um novo recurso foi criado 
        }catch (error){
            res.status(500).json({error: error})
        }
    },

    async read(req,res){
        try{
            const {_id} = req.params
            const usuarios = await Usuario.findOne({_id}); // buscar apenas um pelo id do mongo
            res.json(usuarios) 
    }catch (error) {
        res.status(406).json({error: error}) //406 quando não encontra nada com os dados
    }
        
    },

    async delete(req,res){
        const {_id} = req.params; // pegar por parametro nesse caso o id

        const usuarios = await Usuario.findOneAndDelete({_id}); // deletar  user

        res.status(usuarios)// 204 = acção realizada e nada mais precisa ser fornecido

    },

    async update(req,res){
        const {_id, nome, email, cpf, senha} = req.body;  
        
        let atualizando = {}
        
        atualizando = { nome, email, cpf, senha} 

        const usuarios = await Usuario.findByIdAndUpdate({_id}, atualizando, {new:true}); // update pelo id  
        res.status(200).json(usuarios)
    },

}