document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.header__body').classList.toggle('nav-mobile');
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('body').classList.toggle('no-scroll');
    
}