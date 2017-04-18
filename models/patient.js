var mongoose = require("mongoose");

var patientSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    address: { street: String, number: Number },
    code: String,
    doctor: String,
    in_hospital: Boolean,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', patientSchema);