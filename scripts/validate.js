const validationSettings = [
  {
    formSelector: '.popup__profile-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  },
  {
    formSelector: '.popup__addCard-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
];

const enableValidation = (validationSetting) => {
  const formElement = document.querySelector(validationSetting.formSelector);
  formElement.addEventListener('submit', (evt) => {
    // У формы отменим стандартное поведение
    evt.preventDefault(validationSettings);
    enableValidationGlobal(validationSettings);
  });
  // Для формы вызовем функцию setEventListeners,
  // передав ей элемент формы
  setEventListeners(validationSetting, formElement);
};

const showInputError = (formElement, inputElement, errorMessage, validationSetting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSetting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSetting.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validationSetting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSetting.inputErrorClass);
  errorElement.classList.remove(validationSetting.errorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, validationSetting) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSetting);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, validationSetting);
  }
};

const setEventListeners = (validationSetting, formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(validationSetting.inputSelector));
  const buttonElement = formElement.querySelector(validationSetting.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationSetting);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, validationSetting);
      toggleButtonState(inputList, buttonElement, validationSetting);
    });
  });
}


// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement, validationSetting) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList) || (inputList.length < 0)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(validationSetting.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(validationSetting.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};
const enableValidationGlobal = (validationSettings) => {
  validationSettings.forEach((validationSetting) => {
    enableValidation(validationSetting)
  });
}
// Вызовем функцию
enableValidationGlobal(validationSettings);
