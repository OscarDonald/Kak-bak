const recipeBtn = document.querySelectorAll('recipe-btn');
const main = document.querySelector('main');


recipeBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        const recipe = event.target;
        main.innerHTML = '';
        button();
    });

})


main.addEventListener('click', function () {
    mainContent.innerHTML = '';
    main();
});