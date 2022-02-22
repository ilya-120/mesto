//const validationSettings = {
class FormValidator {
  constructor(settings, formSelector) {
    this._inputSelector = settings.inputSelector, //: '.popup__input',
      this._submitButtonSelector = settings.submitButtonSelector,//: '.popup__container-submit-button',
      this._inactiveButtonClass = settings.inactiveButtonClass,//: 'popup__container-submit-button_disabled',
      this._inputErrorClass = settings.inputErrorClass,//: 'popup__input_type_error',
      this._errorClass = settings.errorClass,//: 'popup__error_visible'
      this._formSelector = formSelector,//: '.popup__container-form',
      this._submitButton = this._formSelector.querySelector(this._submitButtonSelector),
      this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector))
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError = (inputElement, errorElement, validationMessage) => {
    //const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (inputElement, errorElement) => {
    //const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
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

  // Функция принимает массив полей

  /*_hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  }*/

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять

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
    //const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    //toggleButtonState(inputList, buttonElement, validationSetting);
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


/*function enableValidation(validationSetting) {
  const formList = document.querySelectorAll(validationSetting.formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault(validationSettings);
    });
    setEventListeners(formElement, validationSetting);
  })
};

// Вызовем функцию
enableValidation(validationSettings);*/
export { FormValidator };
