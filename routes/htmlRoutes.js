var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });

  app.get("/addRecipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addRecipe.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

    app.get("/addedRecipes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/addedRecipes.html"));
  });

};