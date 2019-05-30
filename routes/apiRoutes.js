var db = require("../models");
// POST route for saving a new post
module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    db.Recipe.findAll().then(function(dbData) {
      res.json(dbData);
    });
  });

  app.post("/api/posts", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

 };

