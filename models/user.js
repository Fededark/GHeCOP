var moongose = require("mongoose");

var userSchema = moongose.Schema({
    //key: String,
    name: { first: String, last: String },
    birthdate: String,
    hospital: String,
    email: String,
    password: String,
    phone: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

module.exports = moongose.model('User', userSchema);