$(document).ready(function(){
 // Getting jQuery references to the name, steps, form, and ingredients 

 var nameInput = $("#name");
 var stepsInput = $("#steps");
 var ingredientsInput = $('#ingredients');
 var cmsForm = $("#cms");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new recipe is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a name, steps, or ingredients
    if (!nameInput.val().trim() || !stepsInput.val().trim() || !ingredientsInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newRecipe = {
      name: nameInput.val().trim(),
      steps: stepsInput.val().trim(),
      ingredients: ingredientsInput.val().trim() 
    };

   console.log(newRecipe)
    
      submitRecipe(newRecipe);
    };
    function submitRecipe(recipe) {
        $.post("/api/posts", recipe, function() {
          window.location.href = "/addRecipe";
        });
      }

  
});