const recipesDiv = document.getElementById("recipe-container");

let json;

async function getRecipes() {
    const response = await fetch ('./recipe.json');
    const recipes = await response.json();
    console.log(recipes);
    showRecipes(0, recipes);
}

getRecipes();

function showRecipes(recipeIndex, recipes){
    const name = recipes.recipeIndex;
    console.log();
    
}

