import { openPopup, closePopup } from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._name = data.name,
    this._link = data.link,
    this._templateSelector = templateSelector,
    this._popup = document.querySelector('#popup-image')
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content;
    const placeElementReference = cardElement.querySelector('.elements__card');
    const placeElement = placeElementReference.cloneNode(true);
    this._placeElement = placeElement;
    return placeElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageTitle = this._element.querySelector('.elements__card-title');
    const imageCard = this._element.querySelector('.elements__card-image');
    imageTitle.textContent = this._name;
    imageCard.alt = this._name;
    imageCard.src = this._link;

    this._setEventListeners();

    return this._element;
  }

  _callOpenPopup() {
    openPopup(this._popup);
  }

  _callClosePopup() {
    closePopup();
  }

  _callCardImageClick(e) {
    const cardImage = document.querySelector('.popup__card-image');
    const cardTitle = document.querySelector('.popup__card-title');
    cardImage.src = e.target.src;
    cardImage.alt = e.target.alt;
    cardTitle.textContent = e.target.alt;
    this._callOpenPopup();
  }

  _callLikeButtonClick(e) {
    e.target.classList.toggle('elements__card-like_activ');
  }

  _callRemoveButtonClick(e) {
    this._placeElement.addEventListener('click', (e) => {
      this._placeElement.remove()
    });
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector('.elements__card-image');
    const cardLikeButton = this._element.querySelector('.elements__card-like');
    const cardRemoveButton = this._element.querySelector('.elements__card-delete');

    cardImage.addEventListener('click', (e) => {
      this._callCardImageClick(e);
    });
    cardLikeButton.addEventListener('click', (e) => {
      this._callLikeButtonClick(e);
    });
    cardRemoveButton.addEventListener('click', (e) => {
      this._callRemoveButtonClick(e);
    });
  }
}

export { Card };