var Patient = require("../models/patient");

module.exports = function(patient) {

    newPatient = new Patient();

    newPatient.name.first = patient.firstName;
    newPatient.name.last = patient.lastName;
    newPatient.birthDate = patient.birthdate;
    newPatient.address.street = patient.street;
    newPatient.address.number = patient.number;
    newPatient.code = patient.code;
    newPatient.doctor = patient.doctor_id;

    switch (patient.location) {
        case "hospital":
            newPatient.in_hospital = true;
            break;
        case "home":
            newPatient.in_hospital = false;
            break;
    }

    newPatient.save(function(err) {
        if (err) {
            console.log('Error in Saving user: ' + err);
            return false;
        }
    });

    return true;
}