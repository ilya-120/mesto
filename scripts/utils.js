const popupImage = document.querySelector('#popup-image');

function openPopup(popup) {
  popup.classList.add('popup_opened'); // Добавляем не активный класс
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByClickOverlay);
}

function openPopupImage() {
  openPopup(popupImage);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened'); // Убираем активный класс
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByClickOverlay);
}

function closeByEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function closeByClickOverlay(e) {
  const openedPopup = document.querySelector('.popup_opened');
  if (e.target === openedPopup) { // Если цель клика - фон, то:
    closePopup(openedPopup); // Убираем активный класс
  }
}

export { openPopup, closePopup, openPopupImage, popupImage };
