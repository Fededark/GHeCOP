var express = require('express');
var addPatient = require('./addpatient');

var Hospital = require('../models/hospital');
var Patient = require('../models/patient');

var router = express.Router();

var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport) {

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { message: req.flash('message') });
    });

    router.post('/addpatient', function(req, res) {
        if (addPatient(req.body)) {
            console.log("Patient added");
            res.redirect('/user');
        }
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/user',
        failureRedirect: '/',
        failureFlash: true
    }));

    /* GET Registration Page */
    router.get('/signup', function(req, res) {
        Hospital.find().
        sort({ city: 1 }).
        exec(function(err, hospitals) {
            if (err) {
                console.error(err);
            } else {
                res.render('register', { message: req.flash('message'), hospitals: hospitals });
            }
        });
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/user',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    /* GET Home Page */
    router.get('/user', isAuthenticated, function(req, res) {
        Patient.find().
        where('doctor').equals(req.user._id).
        sort({ 'name.last': 1 }).
        exec(function(err, patients) {
            if (err) {
                console.error(err);
            } else {
                res.render('user', { user: req.user, patients: patients });
            }
        });
        //console.log(req.user);
        //res.render('user', { user: req.user });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}