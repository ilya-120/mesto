let popup = document.querySelector('.popup'); // Объявляем переменную
let editButton = document.querySelector('.profile__edit-button'); // Объявляем переменную
let closeButton = document.querySelector('.popup__container-close-button'); // Объявляем переменную
let editprofileTitle = document.querySelector('.popup__container-profile-title'); // Объявляем переменную
let editprofileSubtitle = document.querySelector('.popup__container-profile-subtitle'); // Объявляем переменную
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

editButton.addEventListener('click',() => { // Вешаем обработчик на кнопку
  popup.classList.remove('popup_opened'); // Убираем активный класс
  editprofileTitle.value = profileTitle.textContent; // "Исходный текст"
  editprofileSubtitle.value = profileSubtitle.textContent; // "Исходный текст"
});

closeButton.addEventListener('click',() => { // Вешаем обработчик на кнопку
  popup.classList.add('popup_opened'); // Добавляем не активный класс
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popup) { // Если цель клика - фон, то:
    popup.classList.add('popup_opened'); // Добавляем не активный класс
  }
});

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
let submitButton = document.querySelector('.popup__container-submit-button');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
}

submitButton.addEventListener('click',() => { // Вешаем обработчик на кнопку
  formElement.addEventListener('submit', formSubmitHandler);
  popup.classList.add('popup_opened');
  profileTitle.textContent = editprofileTitle.value; // "Записываем введенный текст"
  profileSubtitle.textContent = editprofileSubtitle.value; // "Записываем введенный текст"
});
