var mongoose = require("mongoose");

var patientSchema = mongoose.Schema({
    name: { first: String, last: String },
    sex: String,
    birthDate: String,
    address: { street: String, number: String },
    code: String,
    doctor: String,
    in_hospital: Boolean,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', patientSchema);