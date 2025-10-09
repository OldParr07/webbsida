const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//Enter knapp för att genomföra sökning under ValutAPI

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convert();
    }
});
