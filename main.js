const navDiv = document.querySelector('nav-div');
const main = document.querySelector('main');


navDiv.addEventListener('click', function () {
    mainContent.innerHTML = '';
    navDiv();
});

main.addEventListener('click', function () {
    mainContent.innerHTML = '';
    main();
});