'use strict';

(function() {

  const buttonClose = document.querySelector('.modal-close');
  const popup = document.querySelector('.modal');
  const form = popup.querySelector('form');
  const buttonOpen = document.querySelector('.page-header__button');

  // popup.classList.remove('modal-show');

  const onPopupEscPress = (evt) => {
    window.util.escEvent(evt, closePopup);
  };

  const openPopup = () => {
    popup.classList.add('modal-show');
    document.addEventListener('keydown', onPopupEscPress);
  };

  window.closePopup = () => {
    popup.classList.remove('modal-show');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  buttonOpen.addEventListener('click', () => {
    openPopup();
  });

  buttonOpen.addEventListener('keydown', (evt) => {
    window.util.enterEvent(evt, openPopup);
  });

  buttonClose.addEventListener('click', () => {
    closePopup();
  });

  buttonClose.addEventListener('keydown', (evt) => {
    window.util.enterEvent(evt, closePopup);
  });

})();
