import Popup from './Popup.js';
import { popupImgTitleSelector, popupImgSelector } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  open(item) {
    this._popupElement.querySelector(popupImgTitleSelector).textContent = item.name;
    this._imageElement = this._popupElement.querySelector(popupImgSelector);
    this._imageElement.src = item.link;
    this._imageElement.alt = `${item.name}`;
    super.open();
  }
}
