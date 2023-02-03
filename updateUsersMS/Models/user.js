const {sequelize,Sequelize} = require('../config/db')

const Usuario = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    pass: Sequelize.STRING,
    rol: {
        type:Sequelize.STRING,
        defaultValue:'cli'
    },


    
},{
    tableName: 'usuarios',
    timestamps: false,
})



module.exports = {Usuario}