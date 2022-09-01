const express = require('express')
const UserController = require('./controllers/UserController')

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

module.exports = routes