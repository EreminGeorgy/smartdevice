const sectionsList = document.querySelector('.page-footer__sections-list');
const contactsList = document.querySelector('.page-footer__contacts-list');
const sectionsListButton = document.querySelector('.page-footer__sections-toggle');
const contactsListButton = document.querySelector('.page-footer__contacts-toggle');

if (sectionsList) {sectionsList.classList.remove('page-footer__sections-list--nojs')};
if (contactsList) {contactsList.classList.remove('page-footer__contacts-list--nojs')};

const onButtonClick = function (button, block) {
	if (button && block) {
		const toggle = () => {
			block.classList.toggle('page-footer__menu-opened');
			// if (block.classList.contains('page-footer__menu-opened')) {
			// 	button.classList.add('aside-show-more__icon-link--down');
			// } else {
			// 	hideTextTriangle.classList.remove('aside-show-more__icon-link--down');
			// }
		}
		button.addEventListener('click', toggle);
	}
}

onButtonClick(sectionsListButton, sectionsList);
onButtonClick(contactsListButton, contactsList);
