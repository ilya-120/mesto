import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup{
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector('.popup__container-form').addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleConfirmSubmit();
    });
  }

  submitAction(handleConfirmSubmit) {
    this._handleConfirmSubmit = handleConfirmSubmit;
  }

}
