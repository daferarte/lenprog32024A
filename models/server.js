const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`)
          })
    }

    routes(){
        this.app.use('/users', require('../routes/users.routes'));
        this.app.use('/persons', require('../routes/persons.routes'));
    }
}

module.exports = Server;