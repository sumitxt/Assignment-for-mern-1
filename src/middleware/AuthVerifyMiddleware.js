var jwt = require('jsonwebtoken');
const Users = require("../models/UserModel");


// This piece of code decodes the Token from headers and sets email and authors name in headers for further use

exports.requireSignin = (req, res, next) => {
    let Token = req.headers['token'];
    jwt.verify(Token, "SecretKey123", function (err, decoded) {
        if (err) {
            console.log(Token)
            res.status(401).json({status: "unauthorized"})
        } else {
            let email = decoded['data'][0]['email'];
            // console.log(email)
            req.headers.email = email
            let firstName = decoded['data'][0]['firstName'];
            let lastName = decoded['data'][0]['lastName'];
            let fullName=firstName+" "+lastName
            // console.log(fullName)
            req.headers.fullName = fullName
            req.headers.id=decoded['data'][0]['_id'];
            next();
        }
    })
}

// This piece of code checks if the user is an admin or not.
// Please manually change default value 0 to 1 in database to set an user as admin.

exports.isAdmin = async (req, res, next) => {
    try {
        let id=req.headers.id
        console.log(id)
        const user = await Users.findById(id);
        if (user.role !== 1) {
            return res.status(401).send("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
};