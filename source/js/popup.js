'use strict';

(function () {

  var buttonClose = document.querySelector('.modal-close');
  var popup = document.querySelector('.modal');
  var form = popup.querySelector('form');
  var buttonOpen = document.querySelector('.page-header__button');

  // popup.classList.remove('modal-show');

  var onPopupEscPress = (evt) => {
    window.util.escEvent(evt, closePopup);
  };

  var openPopup = () => {
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
