module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  return Post



  // var User = sequelize.define("User", {
  //   // Giving the User model a name of type STRING
  //   name: DataTypes.STRING
  // });
  
  // User.associate = function(models) {
  //   // Associating User with Posts
  //   // When an User is deleted, also delete any associated Posts
  //   User.hasMany(models.Recipe, {
  //     onDelete: "cascade"
  //   });
  // };
  
  // return User;





};
  


