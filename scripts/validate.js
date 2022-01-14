const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.submit-btn');
  toggleButtonState(inputList, buttonElement)
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(inputList, buttonElement)
      });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
      });

      const fieldsetList = Array.from(formElement.querySelectorAll('.form__input-container'));

      fieldsetList.forEach((fieldSet) => {
          setEventListeners(fieldSet);
      });
  });
};

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}
function toggleButtonState(inputList, buttonElement){
  if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add('submit-btn_disabled');

  } else {
      buttonElement.classList.remove('submit-btn_disabled');
      buttonElement.removeAttribute('disabled');
  }
}

enableValidation();


/* Задание
Профиль:
+ 1. Оба поля обязательны ***
+ 2. В поле Имя 2+ и 40- символов ***
+ 3. В поле о себе 2+ и 200- символов ***
+ 4. Используются стандартные браузерные типы ошибок ***

Новое место:
+ 1. Не нужна проверка длинны текста у ссылки ***
+ 2. Нужна проверка того что введена именно ссылка ***
+ 3. Оба поля обязательны ***
+ 4. В поле Название 2+ и 30- символов ***
+ 5. В поле ссылка должен быть тип url ***

Попап:

+ 1. Закрытие по клику на оверлей ****
+ 2. Закрытие на кнопку 'Esc' ****


Общее условие:
1. Если одно из полей не прошло проверку - то кнопка 'сабмит' не активна ***
2. Если оба поля проходят валидацию - активной ***
3. Функции построены так, что выполняют одно действие ***

Валидация форм:
1. Код валидации разбит на функции и вызывается одной функцией enableValidate
enableValidation({
formSelector: '.popup__form',
inputSelector: '.popup__input',
submitButtonSelector: '.popup__button',
inactiveButtonClass: 'popup__button_disabled',
inputErrorClass: 'popup__input_type_error',
errorClass: 'popup__error_visible'
});
*/
