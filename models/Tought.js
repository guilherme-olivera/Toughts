const { DataTypes } = require("sequelize")

const db = require('../db/conn');

const User = require('./User')

const Tought = db.define('tought', {
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        require: true,
    }
})

Tought.belongsTo(User);// um pensamento tem um usuario
User.hasMany(Tought); // um usuario tem varios pensamentos

module.exports = Tought