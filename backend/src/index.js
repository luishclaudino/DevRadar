const express = require('express'); //váriaveis de valor const não são alteradas
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://cl4udino:teste123@cluster0-tvh3a.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

//Métodos HTTP
//get(quando requer uma informação), post(criar uma informação), delete, put(editar uma informação)

// Tipos de parâmetros

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional)

app.use(express.json());
app.use(routes);

app.listen(3333);

