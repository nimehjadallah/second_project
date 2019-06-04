
$(document).ready(function() {
 
   
  var localInput = localStorage.getItem("input");
  localStorage.clear();

  
  if (localInput){
    searchRecipe(localInput);
  } else{
      getRecipes();
  }

  var nameInput = $("#name");
  var stepsInput = $("#steps");
  var ingredientsInput = $("#ingredients");
  var cmsForm = $("#cms");
  var searchForm = $('#recipeAdd')
  var searchInput = $('#search');
  



  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  $(searchForm).on("submit", handleRecipeSubmit);

  


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
    //Constructing a newPost object to hand to the database
    var newRecipe = {
      name: nameInput.val().trim(),
      steps: stepsInput.val().trim(),
      ingredients: ingredientsInput.val().trim()
    };

    console.log(newRecipe);

    submitRecipe(newRecipe);
  }

  //search function for searching for recipes!!

  function handleRecipeSubmit(event){
    event.preventDefault();
    if (
      !searchInput.val().trim() 
    ) {
      return;
    }
  
  var thingSearched = searchInput.val().trim()


  searchRecipe(thingSearched)
  
  }
function searchRecipe(thingSearched){
  $.get("/api/posts", function(data){
    var recipeFound = false
    console.log(thingSearched)
    $(".recipeContainer").empty();
    for(var i = 0; i < data.length; i++){

      if(data[i].name.includes(thingSearched) || data[i].ingredients.includes(thingSearched) ){
       recipeFound = true
        var div = $("<div>")
        div.addClass("addCard");
        var title = $("<h4>").text(data[i].name)
        var ingredient = $("<p>").text(data[i].ingredients)
        var cookStep = $("<p>").text(data[i].steps)
        div.append(title);
        div.append(ingredient);
        div.append(cookStep);
        $(".recipeContainer").append(div)

      }
    }
    if(recipeFound === false){
      var div2 = $("<div>")
      var tryAgain = $("<p class='tryAgain' />").text("TRY AGAIN")
      div2.append(tryAgain)
      $(".recipeContainer").append(div2)
    }
  });
}


});



function submitRecipe(recipe) {
  $.post("/api/posts", recipe, function() {
    window.location.href = "/addedRecipes";
  });
}

function getRecipes(){
  $.get("/api/posts", function(data){
    console.log(data)

    for(var i = 0; i < data.length; i++){
      var div = $("<div>")
      div.addClass("addCard");
      var title = $("<h4>").text(data[i].name)
      var ingredient = $("<p>").text(data[i].ingredients)
      var cookStep = $("<p>").text(data[i].steps)
      div.append(title);
      div.append(ingredient);
      div.append(cookStep);
      $(".recipeContainer").append(div)
    }
  });
}