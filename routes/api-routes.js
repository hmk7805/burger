// Dependencies
var db = require("../models");
var override = require("method-override");

// Routes
module.exports = function(app) {

    app.get("/api/eatenburgers", function(req, res) {
        db.burgers.findAll({ where: { eaten: true } }, function(data) {
            var dbburgers = {
                eatenBurgers: data
            };
        }).then(function(dbburgers) {
            res.json(dbburgers);
        });
    });

    app.get("/api/newburgers", function(req, res) {
        db.burgers.findAll({ where: { eaten: false } }, function(data) {
            var dbburgers = {
                newBurgers: data
            };
        }).then(function(dbburgers) {
            res.json(dbburgers);
        });
    });

    app.put("/consume/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        db.burgers.update({ eaten: req.body.eaten }, condition, function() {
            res.redirect("/");
        });
    });

    app.post("/newburger", function(req, res) {
        db.burgers.create({
            name: req.body.name,
        }).then(function(dbburgers) {
            res.json(dbburgers);
        });
    });
}