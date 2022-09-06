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
        return res.json(users)
    },

    // update
    async update(req, res) {

        const {
            user_id
        } = req.params

        const {
            name,
            email
        } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const userUpdate = await user.update({
            name,
            email
        }, {
            where: {
                id: user_id
            }
        })


        res.json(userUpdate)
    },

    // delete
    async delete(req, res) {
        const {
            user_id
        } = req.params

        const user = await User.findByPk(user_id, {
            include: {
                association: 'addresses'
            }
        })

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        user.destroy()

        res.json({
            mensage: "User deleted"
        })
    }
}