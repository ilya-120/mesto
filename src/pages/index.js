import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

import {
  editButton,
  nameInput,
  aboutInput,
  addButton,
  editAvatarForm,
  profileForm,
  addCardForm,
  popupImageSelector,
  elementTemplate,
  cardSectionSelector,
  popupAddCardSelector,
  profileNameSelector,
  profileAboutSelector,
  popupEditProfileSelector,
  profileImgSelector,
  userId,
  avatarEditButton,
  popupEditAvatarSelector,
  validationParameters
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38/',
  headers: {
    authorization: 'fa48ff2e-d2a9-4324-9dba-bc9235b793c8',
    'Content-Type': 'application/json'
  }
});

api
  .getAppInfo()
  .then(([userInfoRes, cardListRes]) => {
    userId.id = userInfoRes._id;
    userInfo.setUserInfo(userInfoRes);
    cardList.renderItems(cardListRes)
  })
  .catch((err) => {
    console.log(`Ошибка загрузки данных: ${err}`);
  });


const userInfo = new UserInfo(profileNameSelector, profileAboutSelector, profileImgSelector);

const formProfileValidator = new FormValidator(validationParameters, profileForm);
const formCardValidator = new FormValidator(validationParameters, addCardForm);
const formValidEditAvatar = new FormValidator(validationParameters, editAvatarForm);

formProfileValidator.enableValidation();

formCardValidator.enableValidation();

formValidEditAvatar.enableValidation();

const imagePopup = new PopupWithImage(popupImageSelector);

imagePopup.setEventListeners();

const handleCardClick = (item) => {
  imagePopup.open(item)
}

const handleDeleteElement = (card) => {
  popupConfirm.open()
  popupConfirm.submitAction(() => {
    api.deleteCard(card.getId())
      .then(() => {
        card.removeButtonClick()
        popupConfirm.close()
      })
      .catch((err) =>
        console.log(`Ошибка удаления карточки: ${err}`));
  })
}

const handleLikeElement = (card) => {
  api.updateCardLike(card.getId(), !card.isLiked())
    .then((res) => {
      card.setLikes(res.likes);
    })
    .catch((err) =>
      console.log(`Ошибка удаления лайка: ${err}`));
}

function createNewCard(item) {
  const card = new Card({
    data: item
  },
    handleCardClick,
    handleDeleteElement,
    handleLikeElement,
    elementTemplate,
    userId
  );
  return card.generateCard();
}

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createNewCard(item));
  }
}, cardSectionSelector
);

const handleUserInfoSubmit = (data) => {
  userInfoPopup.renderLoading(true, 'Сохранить', 'Сохранение...')
  api.setUserInfo(data)
    .then((userInfoRes) => {
      userInfo.setUserInfo(userInfoRes)
      userInfoPopup.close()
    })
    .catch((err) => {
      console.log(`Ошибка установки данных пользователя: ${err}`);
    })
    .finally(() => userInfoPopup.renderLoading(false, 'Сохранить', 'Сохранение...'));
}

const userInfoPopup = new PopupWithForm(popupEditProfileSelector, handleUserInfoSubmit);
userInfoPopup.setEventListeners();

const handleAvatarFormSubmit = (data) => {
  editAvatarPopup.renderLoading(true, 'Сохранить', 'Сохранение...');
  api.setAvatar(data)
    .then((userInfoRes) => {
      userInfo.setUserAvatar({
        avatar: userInfoRes.avatar
      })
      editAvatarPopup.close()
    })
    .catch((err) => {
      console.log(`Ошибка установки аватар: ${err}`);
    })
    .finally(() => editAvatarPopup.renderLoading(false, 'Сохранить', 'Сохранение...'));
}

const editAvatarPopup = new PopupWithForm(popupEditAvatarSelector, handleAvatarFormSubmit);
editAvatarPopup.setEventListeners();

const handleCardFormSubmit = (data) => {
  newCardPopup.renderLoading(true, 'Создать', 'Сохранение...')
  api.postNewCard(data)
    .then((res) => {
      cardList.addItem(createNewCard(res))
      newCardPopup.close()
    })
    .catch((err) => {
      console.log(`Ошибка отправки данных карточки: ${err}`);
    })
    .finally(() => newCardPopup.renderLoading(false, 'Создать', 'Сохранение...'));
}

const newCardPopup = new PopupWithForm(popupAddCardSelector, handleCardFormSubmit);
newCardPopup.setEventListeners();

const popupConfirm = new PopupWithConfirm('.popup_type_confirm');
popupConfirm.setEventListeners();

addButton.addEventListener('click', () => {
  formCardValidator.resetValidation();
  newCardPopup.open();
});

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  formProfileValidator.resetValidation();
  userInfoPopup.open();
});

avatarEditButton.addEventListener('click', () => {
  formValidEditAvatar.resetValidation();
  editAvatarPopup.open();
});
