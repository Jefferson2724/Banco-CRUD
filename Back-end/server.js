const express = require ('express'); // conexão com o mongo db
const cors = require('cors') //compartilhamento entre domínios 
const cookieParser = require('cookie-parser'); // troca de dados
const mongoose = require('mongoose')

const routes = require('./src/routes/routes')

const app = express()

mongoose.connect('mongodb+srv://leo:123@cluster0.y7gm4.mongodb.net/crud?retryWrites=true&w=majority',
{
    useNewUrlParser: true, // código padrão para conexão com mongo db
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log(err) //retornar erro na conexão
    }else{
        console.log("mongo db connected successfully")
    }
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log('Olá mundo');
  });