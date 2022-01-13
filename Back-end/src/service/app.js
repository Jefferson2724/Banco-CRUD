import express from 'express';
import routes from './routes/routes';

class App {
    constructor() {
      this.server = express();
      this.middlewares();
      this.routes();
    }

    //receber informações via postman
    middlewares() {
      console.log("acessei aqui");
        this.server.use(express.json());
      }
    
    //iniciando rotas
    routes() {
        this.server.use(routes);
      }
    }

export default new App().server;