const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const PORT = 3000

const app = express()

//==================================
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)

//==================================


//==================================
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})