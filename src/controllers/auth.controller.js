const userModel = require("../models/user.model")

// user register controller 
//post /api/auth/register

function userRegisterController(req, res){

    const {email, password, name} = req.body
    
}

module.exports = { userRegisterController}