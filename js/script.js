const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');

const modalSliderBtn = document.querySelector('#modal-slider-btn');
const modalPersonalBtn = document.querySelector('#modal-personal-btn');
const modalPersonal = document.querySelector('#modal-personal');
const modalSlider = document.querySelector('#modal-slider');
const modalgGroupBtn = document.querySelector('#modal-group-btn');
const modalGroup = document.querySelector('#modal-group');


const myVideoModal = document.querySelector('#my-video-modal');
const myVideoBtn = document.querySelector('#my-video-btn');
// const myVideoBtn = document.querySelectorAll('#my-video-btn')
// const myVideoModal = document.querySelectorAll('#my-video-modal')
// const myVideoBtn = document.querySelector('#my-video-btn');
// const myVideoModal = document.querySelector('#my-video-modal');



const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modalsWrappers = document.querySelectorAll('.modal-area-bgd');
const modalContainers = document.querySelectorAll('.modal-area-content');

const MODAL_ACTIVE_CLASS = 'modal-active';
const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

const modals = [mobileMenu, modalSlider, modalPersonal, modalGroup, myVideoModal];
const buttons = [mobileMenuBtn, modalSliderBtn, modalPersonalBtn, modalgGroupBtn, myVideoBtn];

buttons.forEach((btn, index) => {
    const projectModal = modals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});


modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', hideModal);
})

function enableCloseModalOnBgdClick() {
    if (modalContainers.length) {
        modalContainers.forEach( container => {
            container.addEventListener('click', event => event.stopPropagation());
        });
    }

    if (modalsWrappers.length) {
        modalsWrappers.forEach( container => {
            container.addEventListener('click', hideModal);
        });
    }
}


function hideModal() {
    const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

    if (modalToClose) {
        modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
        document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);    
    }

    const video = document.querySelector('video');

    if (video)  {
        video.pause();
    }
}

function hideModalOnMobileMenuElementsClick() {
    const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
    const menuElements = document.querySelectorAll('.mobile-menu-item');

    if (menuElements.length) {
        menuElements.forEach( container => {
            container.addEventListener('click', () => setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY));
        });
    }
}