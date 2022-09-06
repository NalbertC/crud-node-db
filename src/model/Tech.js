const {
    Model,
    DataTypes
} = require('sequelize')

class Tech extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs' // pluralizacao
        })
    }

    static associate(models) { // relacionamento de tabela endereco

        this.belongsToMany(models.User, {
            foreignKey: 'tech_id',
            through: 'user_techs', //  nome da tabela que vai relacionar
            as: 'users'
        })
    }

}



module.exports = Tech