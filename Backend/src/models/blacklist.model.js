const mongoose = require('mongoose')


const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required:[true, 'token is required to be added in blacklist']
    }
}, {
    timestamps: true  //when the token is blacklisting manage by mongoose automatically
})

const tokenBlacklistModel = mongoose.model("blacklistTokens", blacklistTokenSchema)

module.exports = tokenBlacklistModel