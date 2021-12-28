let popup = document.querySelector('.popup'); // Объявляем переменные
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__container-close-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('.popup__input_type_title');
let jobInput = document.querySelector('.popup__input_type_subtitle');

function popupOpened() {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
}

function popupClose() {
  popup.classList.remove('popup_opened'); // Убираем активный класс
}

editButton.addEventListener('click', popupOpened); { // Вешаем обработчик на кнопку
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
};

closeButton.addEventListener('click', popupClose);  // Вешаем обработчик на кнопку

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  popupClose();
}
formElement.addEventListener('submit', formSubmitHandler);

// Факультативно
//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//  if(e.target === popup) { // Если цель клика - фон, то:
//    popup.classList.remove('popup_opened'); // Убираем активный класс
//  }
//});
