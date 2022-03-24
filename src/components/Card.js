import { buttonLikeSelector, buttonDeleteCardSelector, likeActiveSelector, imageCardSelector, photoTitleSelector, likesVolumeSelector } from '../utils/constants.js';

export default class Card {
  constructor({ data }, handleCardClick, callRemoveButtonClick, handleLikeElement, elementTemplate, userId) {
    this._id = data._id,
      this._name = data.name,
      this._link = data.link,
      this._likes = data.likes,
      this._elementTemplate = document.querySelector(elementTemplate),
      this._handleCardClick = handleCardClick,
      this._callRemoveButtonClick = callRemoveButtonClick,
      this._handleLikeElement = handleLikeElement,
      this._userId = userId.id,
      this._ownerId = data.owner._id
  }

  _getTemplate() {
    return this._elementTemplate.content
      .querySelector('.elements__card')
      .cloneNode(true);
  }

  _removeDelButton() {
    if (this._userId !== this._ownerId) {
      this._removeButton.remove();
    }
  }

  isLiked() {
    return Boolean(this._likes.find(user => user._id === this._userId))
  };

  RemoveButtonClick() {
    this._element.remove();
    this._element = null;
  }

  setLikes(likes) {
    this._likes = likes;
    this._handlerLikes();
  };

  getId() {
    return this._id
  };

  _handlerLikes() {
    this._element.querySelector(likesVolumeSelector).textContent = this._likes.length
    if (this.isLiked()) {
      this._likeButton.classList.add(likeActiveSelector)
    } else {
      this._likeButton.classList.remove(likeActiveSelector)
    }
  };


  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(buttonLikeSelector);
    this._removeButton = this._element.querySelector(buttonDeleteCardSelector);
    this._cardImage = this._element.querySelector(imageCardSelector);
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    const imageTitle = this._element.querySelector(photoTitleSelector);
    imageTitle.textContent = this._name;
    this._setEventListeners();
    this._removeDelButton();
    this._handlerLikes();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeElement(this));
    this._removeButton.addEventListener('click', () => this._callRemoveButtonClick(this));
    this._cardImage.addEventListener('click', () => this._handleCardClick({
      name: this._name,
      link: this._link
    }));
  }
}

