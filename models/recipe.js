// used post.js
module.exports = function(sequelize, DataTypes) {
  var Recipe =sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
  steps: {
    type: DataTypes.TEXT,
    allowNull: false,
    len: [1]
  }
  });

return Recipe
};