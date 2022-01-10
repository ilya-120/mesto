const popup = document.querySelector('.popup'); // Объявляем переменные
const popupAdd = document.querySelector('#popup-add-card');
const popupImage = document.querySelector('#popup-image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closePopapButton = document.querySelector('.popup__container-close-button');
const closePopapAddButton = popupAdd.querySelector('.popup__container-close-button');
const closePopapImageButton = popupImage.querySelector('.popup__container-close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container-form');
const nameInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const linkInput = popupAdd.querySelector('.popup__input_type_link');
const titleInput = document.querySelector('.popup__input_type_name');
const cards = document.querySelector('.elements');
const formElements = popupAdd.querySelector('.popup__container-form');
const cardsContainer = document.querySelector('.elements');
const cardImage = document.querySelector('.popup__card-image');
const cardTitle = document.querySelector('.popup__card-title');

function popupOpened() {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
}

function popupAddOpened() {
  popupAdd.classList.add('popup_opened');
}

function popupImageOpened() {
  popupImage.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened'); // Убираем активный класс
}

function popupAddClose() {
  popupAdd.classList.remove('popup_opened');
}

function popupImageClose() {
  popupImage.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpened); { // Вешаем обработчик на кнопку
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
};

addButton.addEventListener('click', popupAddOpened);

closePopapButton.addEventListener('click', popupClose);  // Вешаем обработчик на кнопку

closePopapAddButton.addEventListener('click', popupAddClose);

closePopapImageButton.addEventListener('click', popupImageClose);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  popupClose();
}
formElement.addEventListener('submit', formSubmitHandler);

function addCards() {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  cardElement.querySelector(".elements__card-image").src = linkInput.value;
  cardElement.querySelector(".elements__card-image").alt = titleInput.value;
  cardElement.querySelector(".elements__card-title").textContent = titleInput.value;
  cardElement.querySelector('.elements__card-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_activ');
  });
  cardsContainer.prepend(cardElement);
  const deleteButton = document.querySelectorAll('.elements__card-delete');
  for (i = 0; i < deleteButton.length; i++) {
    const buttonDelete = deleteButton[i];
    buttonDelete.addEventListener('click', function () {
      const deleteItem = buttonDelete.closest('.elements__card');
      deleteItem.remove();
    });
  }
  const imageOpen = document.querySelectorAll('.elements__card-image');
  for (i = 0; i < imageOpen.length; i++) {
    const openImage = imageOpen[i];
    openImage.addEventListener('click', function (evt) {
      cardImage.src = evt.target.src;
      cardImage.alt = evt.target.alt;
      cardTitle.textContent = evt.target.alt;
      popupImageOpened();
    });
  };
}

function formsSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  addCards()
  popupAddClose();
  titleInput.value = '';
  linkInput.value = '';
}
formElements.addEventListener('submit', formsSubmitHandler);

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

function galleryAddItems(image) {
  addCards()
  cards.querySelector(".elements__card-image").src = image.link;
  cards.querySelector(".elements__card-image").alt = image.name;
  cards.querySelector(".elements__card-title").textContent = image.name;
};

initialCards.forEach(galleryAddItems);

// Факультативно
//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//  if(e.target === popup) { // Если цель клика - фон, то:
//    popup.classList.remove('popup_opened'); // Убираем активный класс
//  }
//});

