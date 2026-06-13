const jwt = require("jsonwebtoken")
const tokenBlacklistmodel = require("../models/blacklist.model")


async function authUser(req, res, next){
    //console.log(process.env.JWT_SECRET)
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistmodel.findOne({
        token
    })
    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded  //here we create new property req.user and save the value of decoded form the 

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token."
        })
    }
}  

module.exports = {authUser}