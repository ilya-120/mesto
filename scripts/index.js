const popup = document.querySelector('.popup'); // Объявляем переменные
const popupAdd = document.querySelector('#popup-add-card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__container-close-button');
const closeAddButton = popupAdd.querySelector('.popup__container-close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container-form');
const nameInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const linkInput = popupAdd.querySelector('.popup__input_type_link');
const titleInput = document.querySelector('.popup__input_type_name');
const cards = document.querySelector('.elements');
const formElements = popupAdd.querySelector('.popup__container-form');

function popupOpened() {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
}

function popupAddOpened() {
  popupAdd.classList.add('popup_opened'); // Добавляем не активный класс
}

function popupClose() {
  popup.classList.remove('popup_opened'); // Убираем активный класс
}

function popupAddClose() {
  popupAdd.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpened); { // Вешаем обработчик на кнопку
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
};

addButton.addEventListener('click', popupAddOpened);

closeButton.addEventListener('click', popupClose);  // Вешаем обработчик на кнопку

closeAddButton.addEventListener('click', popupAddClose);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  popupClose();
}
formElement.addEventListener('submit', formSubmitHandler);

function formsSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  cards.insertAdjacentHTML('afterbegin','<article class="elements__card"><img class="elements__card-image" src="" alt="Фото места"/><div class="elements__card-name"><h2 class="elements__card-title"></h2><button class="elements__card-like" type="button"></button></div></article>');
  cards.querySelector(".elements__card-image").src = linkInput.value;
  cards.querySelector(".elements__card-title").textContent = titleInput.value;
  popupAddClose();
}
formElements.addEventListener('submit', formsSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function galleryAddItems(image) {
  cards.insertAdjacentHTML('afterbegin','<article class="elements__card"><img class="elements__card-image" src="" alt="Фото места"/><div class="elements__card-name"><h2 class="elements__card-title"></h2><button class="elements__card-like" type="button"></button></div></article>');
  cards.querySelector(".elements__card-image").src = image.link;
  cards.querySelector(".elements__card-title").textContent = image.name;
};

initialCards.forEach(galleryAddItems);

// Факультативно
//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//  if(e.target === popup) { // Если цель клика - фон, то:
//    popup.classList.remove('popup_opened'); // Убираем активный класс
//  }
//});
