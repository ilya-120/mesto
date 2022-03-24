import { openedPopupSelector, popupCloseButtonSelector } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add(openedPopupSelector);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove(openedPopupSelector);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(openedPopupSelector) || evt.target.classList.contains(popupCloseButtonSelector)) {
        this.close();
      }
    });
  }
}
