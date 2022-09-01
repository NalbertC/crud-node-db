const User = require('../model/User')

module.exports = {
    async store(req, res) {
        const {
            name,
            email
        } = req.body

        // criar usuario
        const user = await User.create({
            name,
            email
        })

        return res.json(user)
    },

    async index(req, res) {
        const users = await User.findAll()
        res.json(users)
    }
}