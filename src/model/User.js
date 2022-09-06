const {
    Model,
    DataTypes
} = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) { // relacionamento de tabela endereco
        this.hasMany(models.Address, {
            foreignKey: 'user_id',
            as: 'addresses'
        })
        this.belongsToMany(models.Tech, {
            foreignKey: 'user_id',
            through: 'user_techs',
            as: 'techs'
        })
    }

}

module.exports = User