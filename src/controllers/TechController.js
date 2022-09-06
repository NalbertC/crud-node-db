const Tech = require('../model/Tech')
const User = require('../model/User')

module.exports = {
    // create
    async store(req, res) {
        const {
            user_id
        } = req.params

        const {
            name
        } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const [tech] = await Tech.findOrCreate({ // se algo nao existir será criado 
            where: {
                name
            }
        })

        await user.addTech(tech)

        return res.json(tech)

    },

    // read
    async index(req, res) {
        const {
            user_id
        } = req.params

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        return res.json(user)

    },

    // update
    async update(req, res) {

    },

    // delete
    async delete(req, res) {
        const {
            user_id
        } = req.params

        const {
            name
        } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const tech = await Tech.findOne({
            where: {
                name
            }
        })

        await user.removeTech(tech)

        return res.json({
            message: 'Tech deleted'
        })

    },
}