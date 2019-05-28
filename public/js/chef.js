
$(document).ready(function() {
  getRecipes();
  // Getting jQuery references to the name, steps, form, and ingredients

  var nameInput = $("#name");
  var stepsInput = $("#steps");
  var ingredientsInput = $("#ingredients");
  var cmsForm = $("#cms");

  recipeContainer = $(".recipeContainer");

  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new recipe is submitted
  function handleFormSubmit(event) {
    console.log("here");
    event.preventDefault();
    // Wont submit the post if we are missing a name, steps, or ingredients
    if (
      !nameInput.val().trim() ||
      !stepsInput.val().trim() ||
      !ingredientsInput.val().trim()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newRecipe = {
      name: nameInput.val().trim(),
      steps: stepsInput.val().trim(),
      ingredients: ingredientsInput.val().trim()
    };

    console.log(newRecipe);

    submitRecipe(newRecipe);
  }
});
function submitRecipe(recipe) {
  $.post("/api/posts", recipe, function() {
    window.location.href = "/addedRecipes";
  });
}

function getRecipes(){
  // $.get("/api/posts", function(data){
  //   console.log(data)

  //   for(var i = 0; i < data.length; i++){
  //     var div = $("<div>")
  //     var title = $("<h4>").text(data[i].name)
  //     var ingredient = $("<p>").text(data[i].ingredients)
  //     var cookStep = $("<p>").text(data[i].steps)
  //     div.append(title);
  //     div.append(ingredient);
  //     div.append(cookStep);
  //     $(".recipeContainer").append(div)
  //   }
  // })
}

//  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
//  function initializeRows() {
//   recipeContainer.empty();
//   var postsToAdd = [];
//   for (var i = 0; i < posts.length; i++) {
//     postsToAdd.push(createNewRow(posts[i]));
//   }
//   recipeContainer.append(postsToAdd);
// }
//   // This function constructs a post's HTML

// function createNewRow (post){
//   var newRecipe = $("<div>");
//   newRecipe.addClass("card");
//   var newRecipeCardHeading = $("<div>");
//   newRecipeCardHeading.addClass("card-header");
//   var newRecipeTitle = $("<h3>");
//   var newRecipeIngredients = $("<h5>");
//   var newRecipeSteps = $("<p>");
//    newRecipeCardBody = $("<div>");
//    newRecipeCardBody.addClass("card-body");
//   //  var newRecipeBody = $("<p>");
//    newRecipeTitle.text(post.title + " ");
//    newRecipetBody.text(post.body);
//    newRecipeCardHeading.append(newRecipeTitle);
//    newRecipeCardBody.append(newRecipeIngredients);
//    newRecipeCardBody.append(newRecipeSteps);
//    newRecipe.append(newRecipeCardHeading);
//    newRecipe.append(newRecipeCardBody);
//    newRecipe.append(newRecipeCardHeading);
//    newRecipe.append(newRecipeCardBody);
//    newRecipe.data("post", post);
//    return newRecipe;

// }

