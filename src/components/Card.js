import { buttonLikeSelector, buttonDeleteCardSelector, likeActiveSelector, imageCardSelector } from '../utils/constants.js';

export default class Card {
  constructor({ data }, handleCardClick, elementTemplate) {
    this._name = data.name,
    this._link = data.link,
    this._elementTemplate = elementTemplate,
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    return document.querySelector(this._elementTemplate).content
      .querySelector('.elements__card')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector(buttonLikeSelector).addEventListener('click', this._callLikeButtonClick);
    this._element.querySelector(buttonDeleteCardSelector).addEventListener('click', this._callRemoveButtonClick);
    this._element.querySelector(imageCardSelector).addEventListener('click', () => this._handleCardClick({
      name: this._name,
      link: this._link
    }));
  }

  _callLikeButtonClick(e) {
    e.target.classList.toggle(likeActiveSelector);
  }

  _callRemoveButtonClick(e) {
    e.target.closest('.elements__card').remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const imageCard = this._element.querySelector('.elements__card-image');
    const imageTitle = this._element.querySelector('.elements__card-title');
    imageCard.alt = this._name;
    imageCard.src = this._link;
    imageTitle.textContent = this._name;
    return this._element;
  }
}

