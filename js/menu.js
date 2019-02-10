'use strict';

(function () {
    var menu = document.querySelector('.page-header__nav-list');
    var btn = document.querySelector('.page-header__nav-btn');
    var closeBtn = document.querySelector('.page-header__nav-close');

    var openClass = 'page-header__nav-list--opened';

    var toggleMneu = function () {
        menu.classList.toggle(openClass);
    };
    
    var closeMenu = function () {
        menu.classList.remove(openClass);
    };

    var menuHandler = function () {
        btn.addEventListener('click', toggleMneu);
        closeBtn.addEventListener('click', closeMenu);
    };

    menuHandler();
})();