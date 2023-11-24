const recipesDiv = document.getElementById("recipe-container");

async function getRecipes() {
    const response = await fetch (recipe.json);
    const recipes = await response.json();
    console.log(recipeDiv);

}