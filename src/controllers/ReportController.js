const {
    Op
} = require('sequelize')

const Address = require('../model/Address')
const Tech = require('../model/Tech')
const User = require('../model/User')

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com "@gmail.com" exemplo
        // Desses usuários eu quero buscar todos que moram na rua "exemplo"
        // Desses usuários eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            // where: {
            //     email: {
            //         [Op.iLike]: '%@gmail.com'
            //     }
            // },
            include: [{
                    association: 'addresses',
                    where: {
                        street: 'Bela Vista'
                    }
                }, // enderecos
                {
                    association: 'techs',
                    // where: {
                    //     name: {
                    //         [Op.iLike]: 'Node%'
                    //     }
                    // }
                }, // tecnologias
            ]
        })

        return res.json(users)

    }

}