let popup = document.querySelector('.popup'); // Объявляем переменную
let editButton = document.querySelector('.profile__edit-button'); // Объявляем переменную
let closeButton = document.querySelector('.popup__container-close-button'); // Объявляем переменную

editButton.addEventListener('click',() => { // Вешаем обработчик на кнопку
  popup.classList.remove('popup_opened'); // Убираем активный класс
});

closeButton.addEventListener('click',() => { // Вешаем обработчик на кнопку
  popup.classList.add('popup_opened'); // Добавляем не активный класс
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popup) { // Если цель клика - фон, то:
    popup.classList.add('popup_opened'); // Добавляем не активный класс
  }
});
