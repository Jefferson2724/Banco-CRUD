const Usuario = require('../model/usuario'); //acesso ao model de user, permitindo interações com o banco
const jwt = require('jsonwebtoken');
const SECRET = 'desenvolvimentowebe';
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 10 });  //criando um novo nodeCache e o stdTTL número em segundos para cada elemento de cache gerado
module.exports = {

    async index(req, res) {
        if (cache.has('/user')) {
            console.log('Pegando do cache');
            return res.send(cache.get('/user'));

        } else {
            console.log('pegando do bd')
            Usuario.find({})
                .then((usuario) => {
                    cache.set('/user', usuario) // caso não tenha seta o valor para futuras requisições
                    res.status(200).send(usuario)
                }).catch(err => res.status(500).send(err))
        }
    },

    async login(req, res) {
        const { _id, email, senha } = req.body;

        if (!_id || !email || !senha) {
            return res.status(400).json({ error: 'Preencha todos os campos' })
        }

        let logando = {}
        logando = { email, senha }

        if (cache.has('/login')) {
            console.log('Pegando do cache');
            return res.send(cache.get('/login'));
        } else { 
            console.log('pegando do bd')
            Usuario.findOne({ _id, logando })
            .then((usuarioLogado) => {
                cache.set('/login', usuarioLogado)
                res.status(201).send(usuarioLogado)
            }).catch(err => res.status(500).send(err)) 
        }
    },

    async authenticate(req, res) {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({ email, senha });

        if (!usuario) return res.status(401).json({ message: 'User not found' });

        const { _id } = usuario;

        const token = jwt.sign({ userId: _id, }, SECRET, { expiresIn: 86400 }
        );

        return res.send({ usuario, token });

    },

    async create(req, res) {
        try {
            const { name, email, cep, cpf, age, password } = req.body; // pegando dados da requisição

            let creating = {} //recebe os valores do body


            if (!name || !email || !cep || !cpf || !age || !password) {
                res.status(400).json({ error: 'Preencha todos os campos' })
            }
            //inserindo os valores
            creating = { name, email, cep, cpf, age, password }
            const usuarios = await Usuario.create(creating);
            res.status(201).json(usuarios) 
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    async read(req, res) {
        if (cache.has('/read')) {
            console.log('Pegando do cache');
            return res.send(cache.get('/read'));

        } else {
            console.log('Pegando do cache')
            const { _id } = req.params
            Usuario.findOne({_id})
                .then((reading) => {
                    cache.set('/read', reading)
                    res.status(201).send(reading)
                }).catch(err => res.status(500).send(err))
                
            }
    },

    async delete(req, res) {
        try {
            const { _id } = req.params; // passar o parametro nesse caso o id
            const usuarios = await Usuario.findByIdAndDelete({ _id }); // deletar  user
            res.status(204).json(usuarios)  // 204 = acção realizada e nada mais precisa ser fornecido
        } catch (error) {
            res.json({ error: error })
        }

    },

    async update(req, res) {
        const { _id, name, cpf, cep, email, age, password } = req.body;

        let updating = {}

        updating = { name, cpf, cep, email, age, password }

        const usuarios = await Usuario.findByIdAndUpdate({ _id }, updating, { new: true }); // update pelo id  
        res.status(200).json(usuarios)
    },

    async deposit(req, res) {
        const {_id} = req.body;

        const currentBalance = await Usuario.findOne({_id})

        const newBalance = currentBalance.balance + req.body.balance

        updating = {balance: newBalance}

        const usuarios = await Usuario.findByIdAndUpdate({ _id }, updating, { new: true }); 
        
        res.status(200).json(usuarios)

    },

    async withdraw(req, res) {
        const {_id} = req.body;
        const currentBalance = await Usuario.findOne({_id})

        const newBalance = currentBalance.balance - req.body.balance

        updating = {balance: newBalance}
        
        const usuarios = await Usuario.findByIdAndUpdate({ _id }, updating, { new: true }); 

        res.status(200).json(usuarios)
    },

    async transferring(req, res) {
        const {_id, email} = req.body;

        const usertransferring = await Usuario.findOne({_id})
        const tranferring =  usertransferring.balance - req.body.balance
        updateusertransferring = {balance: tranferring}

        const userReciver = await Usuario.findOne({email})
        const receiving = userReciver.balance + req.body.balance
        updateuserReciver = {balance: receiving}

        const transferringMoney = await Usuario.findByIdAndUpdate({ _id }, updateusertransferring, { new: true }); 

        const receivingMoney = await Usuario.findOneAndUpdate({ email }, updateuserReciver, { new: true }); 

        res.status(200).json(transferringMoney)
    }
}