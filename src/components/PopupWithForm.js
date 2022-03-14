import Popup from './Popup.js';
import { popupFormSelector, popupInputSelector } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupFormElement = this._popupElement.querySelector(popupFormSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._popupFormElement.reset();
  }

  _getInputValues() {
    const formValues = {};
    const inputList = Array.from(this._popupFormElement.querySelectorAll(popupInputSelector));
    inputList.forEach((inputElement) => {
      formValues[inputElement.name] = inputElement.value
    });
    return formValues;
  }

  setEventListeners() {
    this._popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
