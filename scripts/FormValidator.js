class FormValidator {
  constructor(settings, formSelector) {
    this._inputSelector = settings.inputSelector,
    this._submitButtonSelector = settings.submitButtonSelector,
    this._inactiveButtonClass = settings.inactiveButtonClass,
    this._inputErrorClass = settings.inputErrorClass,
    this._errorClass = settings.errorClass,
    this._formSelector = formSelector,
    this._submitButton = this._formSelector.querySelector(this._submitButtonSelector),
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector))
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError = (inputElement, errorElement, validationMessage) => {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (inputElement, errorElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // Функция, которая проверяет валидность поля
  _isValid = (inputElement) => {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, errorElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement, errorElement);
    }
  }

  _toggleButtonState = (inputList) => {
    const checkInputInvalid = inputList.some((input) => !input.validity.valid);
    // Если есть хотя бы один невалидный инпут
    if (checkInputInvalid) {
      // сделай кнопку неактивной
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }

  _setEventListeners = () => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = this._inputList;
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  }
}

export { FormValidator };
