var moongose = require("mongoose");

var userSchema = moongose.Schema({
    //key: String,
    firstName: String,
    lastName: String,
    birthdate: String,
    hospital: String,
    email: String,
    password: String,
    phone: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

module.exports = moongose.model('User', userSchema);