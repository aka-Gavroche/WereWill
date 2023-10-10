const headerBurger = document.querySelector('.header__burger');
const headerPagesLinks = document.querySelector('.header__pages-links');
const headerCloseButton = document.querySelector('.header__close-button');
const mainContent = document.querySelector('.main__content');

if (headerBurger) {
    headerBurger.addEventListener("click", function() {
        headerPagesLinks.classList.toggle('header__pages-links_active');
        mainContent.classList.toggle('main__content_hide');
    });
}

if(headerCloseButton) {
    headerCloseButton.addEventListener("click", function () {
        headerPagesLinks.classList.remove('header__pages-links_active');
        mainContent.classList.remove('main__content_hide');
    });
}

// const screenOrientation = window.screen.orientation;
// alert(screenOrientation.type);

// Додамо обробник події "orientationchange"
// window.addEventListener('orientationchange', onOrientationChange);

// const headerPagesLinksActive = document.querySelector('.header__pages-links_active');
// if(headerPagesLinksActive) {
//     alert(6);
// } else {
//     alert("Блять");
// }
// const headeBurgerBefore = document.querySelector('.header__burger::before');
// if(headeBurgerBefore) {
//         alert(6);
//     } else {
//         alert("Блять");
//     }


// // Функція, яка виконується при зміні орієнтації пристрою або зміні розміру вікна
// function onOrientationChange() {
//     // якщо при зміні орієнтації екрана:
//     // - є клас header-pages__links_active
//     // - немає header__burger::before
//     // - є main__content_hide
//     // тоді:

//     alert('Змінено орієнтацію устройства або розмір вікна!');
// }

