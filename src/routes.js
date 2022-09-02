const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express.Router()


//rota teste
routes.get('/', (req, res) => {
    return res.send({
        Hello: "Word"
    })
})

//crud usuarios
routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

//crud endereco
routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)

module.exports = routes