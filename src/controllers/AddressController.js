const User = require('../model/User')
const Address = require('../model/Address')


module.exports = {

    // create
    async store(req, res) {
        const {
            user_id
        } = req.params
        const {
            zipcode,
            street,
            number
        } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
        })
        return res.json(address)
    },

    // read
    async index(req, res) {
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

        return res.json(user)
    },

    // update
    async update(req, res) {
        const {
            user_id,
            address_id
        } = req.params

        const {
            zipcode,
            street,
            number,
        } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const address = await Address.findByPk(address_id)
        if (!address) {
            return res.status(400).json({
                error: 'Address not found'
            })
        }

        const addressUpdate = await address.update({
            zipcode,
            street,
            number,
        }, {
            where: {
                id: address_id
            }
        })

        res.json(addressUpdate)

    },

    // delete
    async delete(req, res) {
        const {
            user_id,
            address_id
        } = req.params


        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        const address = await Address.findByPk(address_id)

        if (!address) {
            return res.status(400).json({
                error: 'Address not found'
            })
        }

        address.destroy()

        res.json({
            mensage: "Address deleted"
        })
    }
}