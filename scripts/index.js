import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popupEdit = document.querySelector('#popup-edit-card'); // Объявляем переменные
const popupAdd = document.querySelector('#popup-add-card');
const popupImage = document.querySelector('#popup-image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closePopapEditButton = popupEdit.querySelector('.popup__container-close-button');
const closePopapAddButton = popupAdd.querySelector('.popup__container-close-button');
const closePopapImageButton = popupImage.querySelector('.popup__container-close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements');
//const cardImage = document.querySelector('.popup__card-image');
//const cardTitle = document.querySelector('.popup__card-title');
//const cardTemplate = document.querySelector('#card').content;
const profileForm = document.forms.editForm;
const addCardForm = document.forms.addForm;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.about;
const linkInput = addCardForm.elements.link;
const titleInput = addCardForm.elements.name;
const submitCardFormButton = addCardForm.elements.submitButton;
const popupEditInputList = Array.from(popupEdit.querySelectorAll('.popup__input'));
const popupEditErrorList = Array.from(popupEdit.querySelectorAll('.popup__error'));
const popupAddInputList = Array.from(popupAdd.querySelectorAll('.popup__input'));
const popupAddErrorList = Array.from(popupAdd.querySelectorAll('.popup__error'));
const validationParameters = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__container-submit-button',
  inactiveButtonClass: 'popup__container-submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}


const initialCards = [
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  //cardsContainer.prepend(createCard(titleInput.value, linkInput.value));
  const card = {
    name: titleInput.value,
    link: linkInput.value
  };
  createCard(card);
  closePopup(popupAdd);
  addCardForm.reset();
}

function openPopup(popup) {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened'); // Убираем активный класс
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByClickOverlay);
}

function closeByEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function closeByClickOverlay(e) {
  const openedPopup = document.querySelector('.popup_opened');
  if (e.target === openedPopup) { // Если цель клика - фон, то:
    closePopup(openedPopup); // Убираем активный класс
  }
}

//Функция отчичтки текстов ошибок
const clearErrors = (inputList, errorList) => {
  inputList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
  errorList.forEach((error) => {
    error.classList.remove('popup__error_visible');
  });
}

function openedProfileEdit() {
  clearErrors(popupEditInputList, popupEditErrorList);
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
  //checkValidationOpenPopup(profileForm);
  openPopup(popupEdit);
};

function openedAddCard() {
  clearErrors(popupAddInputList, popupAddErrorList);
  addCardForm.reset();
  submitCardFormButton.classList.add('popup__container-submit-button_disabled');
  submitCardFormButton.setAttribute('disabled', true);
  //checkValidationOpenPopup(addCardForm);
  openPopup(popupAdd);
};

closePopapEditButton.addEventListener('click', () => {
  closePopup(popupEdit);
});  // Вешаем обработчик на кнопку

closePopapAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

closePopapImageButton.addEventListener('click', () => {
  closePopup(popupImage);
});

const formList = Array.from(document.querySelectorAll('.popup__container-form'));
formList.forEach((formSelector) => {
  const formValidator = new FormValidator(validationParameters, formSelector);
  formValidator.enableValidation();
});


initialCards.forEach(createCard);


function createCard(card) {
  const newCard = new Card(card, '#card');
  cardsContainer.prepend(newCard.generateCard());
}


profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddFormSubmit);
editButton.addEventListener('click', openedProfileEdit);
addButton.addEventListener('click', openedAddCard);

// !! Используем снова, чтобы не добавлять в класс Card
// Отклоненный на ревью рефакторинг: Вместо добавления 3 слушателей каждой карточке,
// повесили 1 слушатель на весь контейнер.
// Механизм делегирования.
// Обработчик обрабатывает каждое событие на элементе,
// а условная конструкция проверяет, на каком из дочерних оно произошло.
//cardsContainer.addEventListener('click', (evt) => {
//  if (evt.target.classList.contains('elements__card-like')) {
//    evt.target.classList.toggle('elements__card-like_activ');
//  }
//  if (evt.target.classList.contains('elements__card-delete')) {
//    const elementItem = evt.target.closest('.elements__card');
//    elementItem.remove();
//  }
//  if (evt.target.classList.contains('elements__card-image')) {
//    cardImage.src = evt.target.src;
//    cardImage.alt = evt.target.alt;
//    cardTitle.textContent = evt.target.alt;
//    openPopup(popupImage);
//  }
//});

export { openPopup, closePopup };

/*function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const imageCard = cardElement.querySelector(".elements__card-image");
  const imageTitle = cardElement.querySelector(".elements__card-title");
  imageCard.src = link;
  imageCard.alt = name;
  imageTitle.textContent = name;
  cardElement.querySelector('.elements__card-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_activ');
  });
  cardElement.querySelector('.elements__card-delete').addEventListener('click', function (evt) {
    const elementItem = evt.target.closest('.elements__card');
    elementItem.remove();
  });
  cardElement.querySelector('.elements__card-image').addEventListener('click', function (evt) {
    cardImage.src = evt.target.src;
    cardImage.alt = evt.target.alt;
    cardTitle.textContent = evt.target.alt;
    openPopup(popupImage);
  });
  return cardElement;
}*/
