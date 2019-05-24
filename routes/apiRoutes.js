var db = require('../models');
 // POST route for saving a new post
 module.exports = function(app) {
  app.post("/api/posts", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
 }

