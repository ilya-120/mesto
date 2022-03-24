import Popup from './Popup.js';
import { popupFormSelector, popupInputSelector, validationParameters } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupFormElement = this._popupElement.querySelector(popupFormSelector);
    this._submitButton = this._popupElement.querySelector(validationParameters.submitButtonSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._popupFormElement.reset();
  }

  _getInputValues() {
    const formValues = {};
    this._inputList = Array.from(this._popupFormElement.querySelectorAll(popupInputSelector));
    this._inputList.forEach((inputElement) => {
      formValues[inputElement.name] = inputElement.value
    });
    return formValues;
  }

  setEventListeners() {
    this._popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  renderLoading(isLoading = false, title = 'Сохранить', loadingTitle = 'Сохранение...') {
    if (!isLoading) {
      this._submitButton.value = title;
    } else {
      this._submitButton.value = loadingTitle;
    }
  }
}
