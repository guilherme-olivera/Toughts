module.exports = class Authcontroller{
    static login(req, res) {
        res.render('auth/login')
    }

    static register(req, res){
        res.render('auth/register')
    }
}

