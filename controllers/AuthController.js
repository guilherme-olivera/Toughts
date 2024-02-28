const user = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class Authcontroller{
    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res){
        res.render('auth/register')
    }

    static async registerPost(req, res){
        const{name, email, password, confirmpasseword} = req. body

        // password macth validation
        if(password != confirmpasseword){
            //mensagem para o Front
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')

            return
        }

    }
}

