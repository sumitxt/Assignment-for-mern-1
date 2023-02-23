var jwt = require('jsonwebtoken');

// This piece of code decodes the Token from headers and sets email and authors name in headers for further use

module.exports = (req, res, next) => {
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
            next();
        }
    })
}