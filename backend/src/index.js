const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')

//Métodos HTTP
//get(quando requer uma informação), post(criar uma informação), delete, put(editar uma informação)

// Tipos de parâmetros

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional)

mongoose.connect('mongodb+srv://cl4udino:teste123@cluster0-tvh3a.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)