// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        res.render("index");
    });

};