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

