
const express = require ('express'); 
const mongoose = require('mongoose') // usado para conectar com o banco de dados 

const routes = require('./src/routes/routes')

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const app = express() // depois de importar o express inicializa ele como uma função
var cors = require('cors');

app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  app.use(cors());
  next();
});

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
// app.use(cors())
// app.use(cookieParser())
app.use(express.json()) //midlleware ler e enviar json
app.use(routes)

//entregar uma porta para abrir
app.listen(3000, () => {
    console.log('Olá mundo');
  });