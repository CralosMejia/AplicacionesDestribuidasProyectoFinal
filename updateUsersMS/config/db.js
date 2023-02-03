const mysql = require ('mysql2');

const {Sequelize,Op} = require('sequelize')

const sequelize = new Sequelize('db_a94161_dbapps', 'a94161_dbapps', 'Arrugasbb248816*', {
    host: 'mysql8002.site4now.net',
    dialect: 'mysql',
    logging: false
})

sequelize.sync(/*{ force: true }*/)
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = {sequelize,Sequelize,Op}