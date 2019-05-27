// Requiring our models
var db = require("../models");

module.exports = function(app) {

    app.get("/api/recipe", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserID = req.query.user_id;
        }
        console.log(query);

        db.Recipe.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbRecipe) {
            res.json(dbRecipe)
        });
    });

    app.put("/api/recipe", function(req, res) {
        db.Recipe.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }.then(function(dbRecipe){
                    res.json(dbRecipe);
                })
            });
    });
};