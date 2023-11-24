const kladdkaka = document.getElementById('kladdkaka');
const lussekatt = document.getElementById('lussekatt');
const silviakaka = document.getElementById('silviakaka');
const recipeContainer = document.getElementById('recipe-container');

kladdkaka.addEventListener('click', function () {
    recipeContainer.innerHTML = '';
    getRecipes(1);
});

lussekatt.addEventListener('click', function () {
    recipeContainer.innerHTML = '';
    getRecipes(0);
});

silviakaka.addEventListener('click', function () {
    recipeContainer.innerHTML = '';
    getRecipes(2);
});

//const main = document.querySelector('main');
//const functions = [kladdkaka(), lussekatt(), silviakaka()];

/*
recipeBtn.forEach(button => {
    console.log(button)
    button.addEventListener('click', function (event) {
        const recipe = event.target;
        main.innerHTML = '';
        button();
        console.log(event.target)
    });

})

main.addEventListener('click', function () {
    mainContent.innerHTML = '';
    main();
});
*/