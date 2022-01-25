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
const cardImage = document.querySelector('.popup__card-image');
const cardTitle = document.querySelector('.popup__card-title');
const cardTemplate = document.querySelector('#card').content;
const profileForm = document.forms.editForm;
const addCardForm = document.forms.addForm;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.about;
const linkInput = addCardForm.elements.link;
const titleInput = addCardForm.elements.name;
const submitButton = addCardForm.elements.submitButton;

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
}

function handleProfileFormSubmit() {
  //evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value; // Записываем введенный текст
  profileSubtitle.textContent = jobInput.value; // Записываем введенный текст
  closePopup(popupEdit);
}

function handleAddFormSubmit() {
  //evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  cardsContainer.prepend(createCard(titleInput.value, linkInput.value));
  closePopup(popupAdd);
  addCardForm.reset();
}

function openPopup(popup) {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened'); // Убираем активный класс
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openedProfileEdit() {
  nameInput.value = profileTitle.textContent; // Исходный текст
  jobInput.value = profileSubtitle.textContent; // Исходный текст
  checkValidationOpenPopup(profileForm, validationSettings);
  openPopup(popupEdit);
};

function openedAddCard() {
  addCardForm.reset();
  checkValidationOpenPopup(addCardForm, validationSettings);
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

initialCards.forEach(function (element) {
  cardsContainer.prepend(createCard(element.name, element.link));
});

document.addEventListener('click', (e) => {// Вешаем обработчик на весь документ
  const openedPopup = document.querySelector('.popup_opened');
  if (e.target === openedPopup) { // Если цель клика - фон, то:
    closePopup(openedPopup); // Убираем активный класс
  }
});

profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddFormSubmit);
editButton.addEventListener('click', openedProfileEdit);
addButton.addEventListener('click', openedAddCard);

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
