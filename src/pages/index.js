import './index.css';

import {
  initialCards,
  editButton,
  nameInput,
  aboutInput,
  addButton,
  profileForm,
  addCardForm,
  popupImageSelector,
  elementTemplate,
  cardSectionSelector,
  popupAddCardSelector,
  profileNameSelector,
  profileAboutSelector,
  popupEditProfileSelector,
  validationParameters
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formProfileValidator = new FormValidator(validationParameters, profileForm);
const formCardValidator = new FormValidator(validationParameters, addCardForm);

formProfileValidator.enableValidation();

formCardValidator.enableValidation();

const imagePopup = new PopupWithImage(popupImageSelector);

imagePopup.setEventListeners();

function createNewCard(item) {
  const card = new Card({
    data: item
  },
    () => {
      imagePopup.open(item.link, item.name)
    },
    elementTemplate
  );
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createNewCard(item));
  }
}, cardSectionSelector
);

cardList.renderItems();

const handleCardFormSubmit = (data) => {
  cardList.addItem(createNewCard(data));
}

const newCardPopup = new PopupWithForm(popupAddCardSelector, handleCardFormSubmit);
newCardPopup.setEventListeners();

addButton.addEventListener('click', () => {
  formCardValidator.resetValidation();
  newCardPopup.open();
});

const userInfo = new UserInfo(profileNameSelector, profileAboutSelector);

const userInfoPopup = new PopupWithForm(popupEditProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

userInfoPopup.setEventListeners();

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  formProfileValidator.resetValidation();
  userInfoPopup.open();
});
