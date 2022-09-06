const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

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
routes.put('/users/:user_id/addresses/:address_id', AddressController.update)
routes.delete('/users/:user_id/addresses/:address_id', AddressController.delete)

// tecnologias
routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)

routes.delete("/users/:user_id/techs", TechController.delete)

// relatorio
routes.get('/report', ReportController.show)

module.exports = routes