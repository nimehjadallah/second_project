-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;

Use recipes_db;
INSERT INTO recipes (name, ingredients, steps, createdAt, updatedAt)
Values ("Cilantro Pistachio Pesto Shrimp Pasta", "Shrimp, Pasta, Cilantro, Pistachios,jalapeño, garlic cloves, lime juice, olive oil, garlic powder,  salt and pepper. ",
"Make the pesto by adding the following to the bowl of a food processor: cilantro, pistachios, jalapeño, garlic cloves, lime juice, olive oil, water and salt and pepper. Process until smooth, scraping down the sides and processing again, if necessary.
Next cook the shrimp: add olive oil to a large skillet or pan and place over medium high heat. Add in shrimp, garlic powder and salt and pepper; cook until shrimp is no longer pink. Remove from heat and set aside.
Cook the pasta until al dente, according to the directions on the package. Drain pasta, then add back to pot. Stir in the pesto and shrimp until well coated. Add pasta to bowls and garnish with goat cheese, a few 
cilantro leaves and a sprinkle of crushed pistachios. Serve immediately. Makes about 4 servings.", now(), now());

INSERT INTO recipes (name, ingredients, steps, createdAt, updatedAt)
Values ("Chicken Picata", "1/4 cup all-purpose flour
1/2 teaspoon salt
1/2 teaspoon pepper
4 boneless skinless chicken breast halves (4 ounces each)
1/4 cup butter, cubed
1/4 cup white wine or chicken broth
1 tablespoon lemon juice" , "In a shallow bowl, mix flour, salt and pepper. Pound chicken breasts with a meat mallet to 1/2-in. thickness. Dip chicken in flour mixture to coat both sides; shake off excess.
In a large skillet, heat butter over medium heat. Brown chicken on both sides. Add wine; bring to a boil. Reduce heat; simmer, uncovered, until chicken is no longer pink, 12-15 minutes. Drizzle with lemon juice. If desired, sprinkle with parsley." now(), now());

INSERT INTO recipes (name, ingredients, steps, createdAt, updatedAt)
Values ("Baked Lemon Chicken", "1 1/4 pounds boneless skinless chicken breasts
1 tablespoon olive oil
salt and pepper to taste
1 teaspoon Italian seasoning
3 tablespoons butter melted
1 teaspoon minced garlic
1/4 cup chicken broth
2 tablespoons lemon juice
1 tablespoon chopped parsley
lemon slices for serving (optional)" , "Preheat the oven to 400 degrees. Season the chicken breasts on both sides with salt, pepper and the Italian seasoning.
Heat the olive oil in a large pan over medium high heat. Add the chicken breasts and cook for 3-5 minutes on each side or until browned.
Transfer the chicken to a baking dish. 
In a small bowl, mix together the butter, garlic, chicken broth and lemon juice. Pour the butter mixture over the chicken.
Bake for 25 minutes or until chicken is cooked through. Bake time may vary depending on the thickness of your chicken breasts.
Spoon the sauce on the bottom of the baking dish over the chicken, then sprinkle with parsley and serve. Garnish with lemon slices if desired." now(), now());

INSERT INTO recipes (name, ingredients, steps, createdAt, updatedAt)
Values ("Dark Chocolate Fondue", "8
oz bittersweet baking chocolate, chopped
8
oz semisweet baking chocolate, chopped
1
pint (2 cups) whipping cream
1
tablespoon vanilla
1
package (10.75 oz) frozen pound cake, cut into 1-inch cubes
40
small fresh strawberries
40
apple slices
Kiwifruit, cut up, if desired" , "In 2-quart heavy saucepan, heat both chocolates and the whipping cream over low heat, stirring frequently, until cream is hot and chocolate is melted. Stir with wire whisk until smooth. Stir in vanilla. Pour into fondue pot. Keep warm with fuel canister on low heat.
Arrange cake and fruit dippers on platter. Set fondue pot in center of platter." now(), now());

INSERT INTO recipes (name, ingredients, steps, createdAt, updatedAt)
Values ("Milk Chocolate Fondue", "2/3
cup half-and-half
12
oz milk chocolate or 1 bag (11.5 oz) milk chocolate chips (2 cups))
2
tablespoons orange-flavored liqueur, kirsch, brandy or half-and-half
Dippers (pound cake cubes, strawberries, pineapple chunks, apple slices, marshmallows)" , "In 2-quart heavy saucepan, heat half-and-half and chocolate over low heat, stirring constantly, until chocolate is melted and mixture is smooth; remove from heat. Stir in liqueur. Pour into fondue pot or chafing dish.
Spear Dippers with fondue forks; dip into fondue. (If fondue becomes too thick, stir in a small amount of half-and-half.)" now(), now());