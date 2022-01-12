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
const profileForm = document.querySelector('.popup__container-form');
const nameInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const linkInput = popupAdd.querySelector('.popup__input_type_link');
const titleInput = document.querySelector('.popup__input_type_name');
const cards = document.querySelector('.elements');
const addCardForm = popupAdd.querySelector('.popup__container-form');
const cardsContainer = document.querySelector('.elements');
const cardImage = document.querySelector('.popup__card-image');
const cardTitle = document.querySelector('.popup__card-title');
const cardTemplate = document.querySelector('#card').content;

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

function openPopup(popup) {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
}

function closePopup(popup) {
  popup.classList.remove('popup_opened'); // Убираем активный класс
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closePopapEditButton.addEventListener('click', () => {
  closePopup(popupEdit);
});  // Вешаем обработчик на кнопку

closePopapAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

closePopapImageButton.addEventListener('click', () => {
  closePopup(popupImage);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  closePopup(popupEdit);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const imageCard = cardElement.querySelector(".elements__card-image");
  const imageTitle = cardElement.querySelector(".elements__card-title");
  imageCard.src = link;
  imageCard.alt = name;
  imageTitle.textContent = name;
  cardElement.querySelector('.elements__card-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_activ');
  });
  cardElement.querySelector('.elements__card-delete').addEventListener('click', function (event) {
    const elementItem = event.target.closest('.elements__card');
    elementItem.remove();
  });
  cardElement.querySelector('.elements__card-image').addEventListener('click', function (evt) {
    cardImage.src = evt.target.src;
    cardImage.alt = evt.target.alt;
    cardTitle.textContent = evt.target.alt;
    openPopup(popupImage);
  });
  return cardElement;
}

initialCards.forEach(function (element) {
  cardsContainer.prepend(createCard(element.name, element.link));
});

function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  cardsContainer.prepend(createCard(titleInput.value, linkInput.value));
  closePopup(popupAdd);
  titleInput.value = '';
  linkInput.value = '';
}
addCardForm.addEventListener('submit', handleAddFormSubmit);

// Факультативно
//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//  if(e.target === popup) { // Если цель клика - фон, то:
//    popup.classList.remove('popup_opened'); // Убираем активный класс
//  }
//});

