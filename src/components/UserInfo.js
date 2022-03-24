export default class UserInfo {
  constructor(name, about, avatar) {
    this._userName = document.querySelector(name);
    this._userAbout = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this.setUserAvatar(data);
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar
  }
}
