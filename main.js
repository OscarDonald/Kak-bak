const recipeBtn = document.querySelectorAll('recipe-btn');
const main = document.querySelector('main');

const functions = [kladdkaka(), lussekatt(), silviakaka()];


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



functions();



main.addEventListener('click', function () {
    mainContent.innerHTML = '';
    main();
});
*/