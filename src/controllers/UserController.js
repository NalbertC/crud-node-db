const User = require('../model/User')

module.exports = {
    // create
    async store(req, res) {
        const {
            name,
            email
        } = req.body

        const user = await User.create({
            name,
            email
        })

        return res.json(user)
    },

    // read
    async index(req, res) {
        const users = await User.findAll()
        res.json(users)
    }
}