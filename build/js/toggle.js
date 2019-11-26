'use strict';

(function () {
  var sectionsList = document.querySelector('.page-footer__sections-list');
  var contactsList = document.querySelector('.page-footer__contacts-list');
  var sectionsListButton = document.querySelector('.page-footer__sections-toggle');
  var contactsListButton = document.querySelector('.page-footer__contacts-toggle');

  if (sectionsList) {sectionsList.classList.remove('page-footer__sections-list--nojs')};
  if (contactsList) {contactsList.classList.remove('page-footer__contacts-list--nojs')};

  var onButtonClick = function (button, block) {
    if (button && block) {
      var toggle = function () {
        block.classList.toggle('page-footer__menu-opened');
      }
      button.addEventListener('click', toggle);
    }
  }

  onButtonClick(sectionsListButton, sectionsList);
  onButtonClick(contactsListButton, contactsList);
})();
