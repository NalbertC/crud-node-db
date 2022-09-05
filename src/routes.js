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
routes.put('/users/:user_id', UserController.update)
routes.delete('/users/:user_id', UserController.delete)

//crud endereco
routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)

module.exports = routes