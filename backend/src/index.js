const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes.js');
const {MONGO_USER, MONGO_PASS, MONGO_DB} = require('../.env')

const { setupWebsocket } = require('./websocket');

//Métodos HTTP
//get(quando requer uma informação), post(criar uma informação), delete, put(editar uma informação)

// Tipos de parâmetros

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional)

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-tvh3a.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const app = express();
const server = http.Server(app);

setupWebsocket(server);

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json())
app.use(routes)

server.listen(3333)