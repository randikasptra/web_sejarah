window.onscroll = () => {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;


    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


const navbar = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu')
navbar.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})