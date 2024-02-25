const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hostelhorsedb', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conectamos com Sucesso!!')

}catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize