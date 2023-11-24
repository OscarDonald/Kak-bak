const recipesDiv = document.getElementById("recipe-container");
let json;
async function getRecipes() {
    console.log("startGetRecipes");
    const response = await fetch('./recipe.json');
    const recipes = await response.json();
    console.log(recipes);
    showRecipes(0, recipes);
}
getRecipes();


function showRecipes(recipeIndex, recipes) {
    const name = recipes.recipes[recipeIndex];
    console.log(name);
    const result = `<h3>${name.recipeName}</h3><h4>${name.portions}</h4><h5>${name.ingredients}</h5><p>${name.instructions}</p>`;
    console.log(result);
    console.log(recipeContainer)
    recipeContainer.innerHTML = result;

    /* return `<h3>${name.recipeName}</h3>`
     return `<h4>${name.portions}</h4>`
     return `<h5>${name.ingredients}</h5>`
     return `<p>${name.instructions}</p>`;
 */
}