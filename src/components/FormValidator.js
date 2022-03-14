export default class FormValidator {
  constructor(validationParameters, formSelector) {
    this._parameters = validationParameters,
    this._formSelector = formSelector,
    this._submitButton = this._formSelector.querySelector(this._parameters.submitButtonSelector),
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._parameters.inputSelector))
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  _showInputError = (inputElement) => {
    inputElement.classList.add(this._parameters.inputErrorClass);
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._parameters.errorClass);
  }

  _hideInputError = (inputElement) => {
    inputElement.classList.remove(this._parameters.inputErrorClass);
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._parameters.errorClass);
    this._errorElement.textContent = '';
  }

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _disableSubmitButton() {
    this._submitButton.classList.add(this._parameters.inactiveButtonClass);
    this._submitButton.setAttribute('disabled', '');
  };

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._parameters.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }
}

