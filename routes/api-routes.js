// Dependencies
var db = require("../models");
var override = require("method-override");

// Routes
module.exports = function(app) {
    //this works
    app.get("/api", function(req, res) {
        db.burgers.findAll({}).then(function(data) {
            res.json(data);
        });
    });
    //this works
    app.put("/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("before");
        db.burgers.update({ eaten: req.body.eaten }, { where: { uuid: req.params.id } }, function() {});
        res.redirect("/");
    });
    //this works
    app.delete("/:id", function(req, res) {
        db.burgers.destroy({ where: { uuid: req.params.id } }, function() {});
        res.redirect("/");
    });
    //this works
    app.post("/newburger", function(req, res) {
        db.burgers.create({
            name: req.body.name,
        }).then(function(dbburgers) {
            res.json(dbburgers);
        });
    });

}