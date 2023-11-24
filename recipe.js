const recipesDiv = document.getElementById("recipe-container");
let json;
async function getRecipes(index) {
    console.log("startGetRecipes");
    const response = await fetch('./recipe.json');
    const recipes = await response.json();
    // console.log(recipes);
    showRecipes(index, recipes);
}

function showRecipes(recipeIndex, recipes) {
    const name = recipes.recipes[recipeIndex];
    console.log(name);
    const result = `<h3>${name.recipeName}</h3>git 
    <h4>antal bitar  ${name.portions} st</h4>
    <ul>
        <li>${name.ingredients[0].name} ${name.ingredients[0].baseAmount}${name.ingredients[0].unit}</li>
        <li>${name.ingredients[1].name} ${name.ingredients[1].baseAmount}${name.ingredients[1].unit}</li>
        <li>${name.ingredients[2].name} ${name.ingredients[2].baseAmount}${name.ingredients[2].unit}</li>
        <li>${name.ingredients[3].name} ${name.ingredients[3].baseAmount}${name.ingredients[3].unit}</li>
        <li>${name.ingredients[4].name} ${name.ingredients[4].baseAmount}${name.ingredients[4].unit}</li>
        <li>${name.ingredients[5].name} ${name.ingredients[5].baseAmount}${name.ingredients[5].unit}</li>
        <li>${name.ingredients[6].name} ${name.ingredients[6].baseAmount}${name.ingredients[6].unit}</li>
        <li>${name.ingredients[7].name} ${name.ingredients[7].baseAmount}${name.ingredients[7].unit}</li>
    </ul>`;
    // <p>${name.instructions}</p>`;
    // console.log(result);
    // console.log(recipeContainer)
    recipeContainer.innerHTML = result;

    /* return `<h3>${name.recipeName}</h3>`
     return `<h4>${name.portions}</h4>`
     return `<h5>${name.ingredients}</h5>`
     return `<p>${name.instructions}</p>`;
 */
}