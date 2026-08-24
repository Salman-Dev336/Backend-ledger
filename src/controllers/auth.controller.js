const userModel = require("../models/user.model");

/**
 * - user register controller
 * - POST/api/auth/register
 */

async function userRegisterController(req, res) {
  const { email, password, name } = req.body;

  const isExists = await usermodel.findOne({
    email: email,
  });
  if (isExists){
    return res.status(422).json({
        message: "user already register with this email",
        status: "failed",

    })
  }
}

module.exports = { userRegisterController };
