$(document).ready(function() {
    $("#homeBtn").on ("click", function() {
        event.preventDefault();
        $(".recipeContainer").empty();
        var userInput = $("#homeSearch").val().trim();
        localStorage.clear();
        localStorage.setItem("input", userInput)
         window.location.href = "/addedRecipes";
        //  var localInput = localStorage.getItem("input");
        //  console.log(localInput);
         
      
      
            // handleRecipeSubmit();
            // searchRecipe();
      
      });
    });