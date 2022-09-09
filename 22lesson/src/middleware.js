const jwt = require('jsonwebtoken');

const {jwtSecret} = require('./config');

module.exports = {
    isLoggedIn: async (req, res, next) => {
try {
// Bearer asdas@1231233
const token = req.headers.authorization?.split((''))[1]; // [Bearer asdas@1231233]
const user = jwt.verify(token, jwtSecret);
req.body = user;
next(); 
} catch(error) {
    console.error (error);
    res.status(401).send ({ error: "Invalid token"});
}

    },
};