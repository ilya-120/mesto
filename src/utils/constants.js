export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const profileForm = document.forms.editForm;
export const addCardForm = document.forms.addForm;
export const nameInput = profileForm.elements.name;
export const aboutInput = profileForm.elements.about;
export const popupImageSelector = '#popup-image';
export const popupAddCardSelector = '#popup-add-card';
export const popupEditProfileSelector = '#popup-edit-card';
export const elementTemplate = '#card';
export const cardSectionSelector = '.elements';
export const profileNameSelector = '.profile__title';
export const profileAboutSelector = '.profile__subtitle';
export const buttonLikeSelector = '.elements__card-like';
export const buttonDeleteCardSelector = '.elements__card-delete';
export const likeActiveSelector = 'elements__card-like_activ';
export const imageCardSelector ='.elements__card-image';
export const openedPopupSelector = 'popup_opened';
export const popupCloseButtonSelector = 'popup__container-close-button';
export const popupFormSelector = '.popup__container-form';
export const popupInputSelector = '.popup__input';
export const popupImgTitleSelector = '.popup__card-title';
export const popupImgSelector ='.popup__card-image';
export const validationParameters = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__container-submit-button',
  inactiveButtonClass: 'popup__container-submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
export const initialCards = [
  {
    name: 'Нью-Йорк',
    link: 'https://kvotka.ru/images/2022/01/10/NY2012.jpg'
  },
  {
    name: 'Сочи',
    link: 'https://kvotka.ru/images/2022/01/10/Sochi2018.jpg'
  },
  {
    name: 'Шибеник',
    link: 'https://kvotka.ru/images/2022/01/10/Shib2019.jpg'
  },
  {
    name: 'Реджо-ди-Калабрия',
    link: 'https://kvotka.ru/images/2022/01/10/Piz2018.jpg'
  },
  {
    name: 'Петергоф',
    link: 'https://kvotka.ru/images/2022/01/10/StP2021.jpg'
  },
  {
    name: 'Париж',
    link: 'https://kvotka.ru/images/2022/01/10/Par2018.jpg'
  }
];
