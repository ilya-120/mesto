import Popup from './Popup.js';
import { popupImgTitleSelector, popupImgSelector } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  open(link, name) {
    this._popupElement.querySelector(popupImgTitleSelector).textContent = name;
    const imageElement = this._popupElement.querySelector(popupImgSelector);
    imageElement.src = link;
    imageElement.alt = `${name}`;
    super.open();
  }
}
