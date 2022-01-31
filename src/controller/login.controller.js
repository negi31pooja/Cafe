const login_model = require('../model/login.model')
// Check Login Details
exports.checkUser = (req, res) => {

    console.log('testing'+ JSON.stringify(req.body))
    var loginData=[req.body.username,req.body.password]

    login_model.checkUser(loginData,(err,result) => {
        if (err) {
            res.json({ status: false, message: 'User login Details are incorrect', data: result })
        }
        else {
            res.json({ status: true, message: 'Login Successful', data: result })
        }
    })
}