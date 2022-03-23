(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar"),r=document.forms.editForm,o=document.forms.addForm,i=document.forms.newAvatar,a=r.elements.name,u=r.elements.about,c="elements__card-like_activ",s="popup_opened",l={},f={formSelector:".popup__container-form",inputSelector:".popup__input",submitButtonSelector:".popup__container-submit-button",inactiveButtonClass:"popup__container-submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i,a){var u=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=u._id,this._name=u.name,this._link=u.link,this._likes=u.likes,this._elementTemplate=document.querySelector(i),this._handleCardClick=n,this._callRemoveButtonClick=r,this._handleLikeElement=o,this._userId=a.id,this._ownerId=u.owner._id}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._elementTemplate.content.querySelector(".elements__card").cloneNode(!0)}},{key:"_removeDelButton",value:function(){this._userId!==this._ownerId&&this._removeButton.remove()}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"RemoveButtonClick",value:function(){this._element.remove(),this._element=null}},{key:"setLikes",value:function(e){this._likes=e,this._handlerLikes()}},{key:"getId",value:function(){return this._id}},{key:"_handlerLikes",value:function(){this._element.querySelector(".element__likes-volume").textContent=this._likes.length,this.isLiked()?this._likeButton.classList.add(c):this._likeButton.classList.remove(c)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".elements__card-like"),this._removeButton=this._element.querySelector(".elements__card-delete"),this._cardImage=this._element.querySelector(".elements__card-image"),this._cardImage.alt=this._name,this._cardImage.src=this._link,this._element.querySelector(".elements__card-title").textContent=this._name,this._setEventListeners(),this._removeDelButton(),this._handlerLikes(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeElement(e)})),this._removeButton.addEventListener("click",(function(){return e._callRemoveButtonClick(e)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick({name:e._name,link:e._link})}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_showInputError",(function(e){e.classList.add(r._parameters.inputErrorClass),r._errorElement=r._formSelector.querySelector(".".concat(e.id,"-error")),r._errorElement.textContent=e.validationMessage,r._errorElement.classList.add(r._parameters.errorClass)})),y(this,"_hideInputError",(function(e){e.classList.remove(r._parameters.inputErrorClass),r._errorElement=r._formSelector.querySelector(".".concat(e.id,"-error")),r._errorElement.classList.remove(r._parameters.errorClass),r._errorElement.textContent=""})),y(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),this._parameters=t,this._formSelector=n,this._submitButton=this._formSelector.querySelector(this._parameters.submitButtonSelector),this._inputList=Array.from(this._formSelector.querySelectorAll(this._parameters.inputSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._submitButton.classList.add(this._parameters.inactiveButtonClass),this._submitButton.setAttribute("disabled","")}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._parameters.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formSelector.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))})),this._toggleButtonState()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add(s),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(s),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains(s)||t.target.classList.contains("popup__container-close-button"))&&e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(){return w(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e){this._popupElement.querySelector(".popup__card-title").textContent=e.name,this._imageElement=this._popupElement.querySelector(".popup__card-image"),this._imageElement.src=e.link,this._imageElement.alt="".concat(e.name),S(j(a.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupFormElement=n._popupElement.querySelector(".popup__container-form"),n._submitButton=n._popupElement.querySelector(f.submitButtonSelector),n._handleFormSubmit=t,n}return t=a,n=[{key:"close",value:function(){R(U(a.prototype),"close",this).call(this),this._popupFormElement.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputList=Array.from(this._popupFormElement.querySelectorAll(".popup__input")),this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),R(U(a.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";this._submitButton.textContent=e?n:t}}],n&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userAbout=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about,this.setUserAvatar(e)}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateCardLike",value:function(e,t){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=$(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function $(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function K(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(){return H(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;z(Q(a.prototype),"setEventListeners",this).call(this),this._popupElement.querySelector(".popup__container-form").addEventListener("submit",(function(t){t.preventDefault(),e._handleConfirmSubmit()}))}},{key:"submitAction",value:function(e){this._handleConfirmSubmit=e}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-38/",headers:{authorization:"fa48ff2e-d2a9-4324-9dba-bc9235b793c8","Content-Type":"application/json"}});Y.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];l.id=o._id,Z.setUserInfo(o),ce.renderItems(i)})).catch((function(e){console.log("Ошибка загрузки данных: ".concat(e))}));var Z=new V(".profile__title",".profile__subtitle",".profile__avatar"),ee=new _(f,r),te=new _(f,o),ne=new _(f,i);ee.enableValidation(),te.enableValidation(),ne.enableValidation();var re=new P("#popup-image");re.setEventListeners();var oe=function(e){re.open(e)},ie=function(e){pe.open(),pe.submitAction((function(){Y.deleteCard(e.getId()).then((function(){e.RemoveButtonClick(),pe.close()})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))}))}))},ae=function(e){Y.updateCardLike(e.getId(),!e.isLiked()).then((function(t){e.setLikes(t.likes)})).catch((function(e){return console.log("Ошибка удаления лайка: ".concat(e))}))};function ue(e){return new h({data:e},oe,ie,ae,"#card",l).generateCard()}var ce=new v({renderer:function(e){ce.addItem(ue(e))}},".elements"),se=new x("#popup-edit-card",(function(e){se.renderLoading(!0,"Сохранить","Сохранение..."),Y.setUserInfo(e).then((function(e){Z.setUserInfo(e),se.close()})).catch((function(e){console.log("Ошибка установки данных пользователя: ".concat(e))})).finally((function(){return se.renderLoading(!1,"Сохранить","Сохранение...")}))}));se.setEventListeners();var le=new x("#popup-avatar",(function(e){le.renderLoading(!0),Y.setAvatar(e).then((function(e){Z.setUserAvatar({avatar:e.avatar}),le.close()})).catch((function(e){console.log("Ошибка установки аватар: ".concat(e))})).finally((function(){return le.renderLoading(!1)}))}));le.setEventListeners();var fe=new x("#popup-add-card",(function(e){fe.renderLoading(!0,"Создать","Сохранение..."),Y.postNewCard(e).then((function(e){ce.addItem(ue(e)),fe.close()})).catch((function(e){console.log("Ошибка отправки данных карточки: ".concat(e))})).finally((function(){return fe.renderLoading(!1,"Создать","Сохранение...")}))}));fe.setEventListeners();var pe=new W(".popup_type_confirm");pe.setEventListeners(),n.addEventListener("click",(function(){ne.resetValidation(),le.open()})),t.addEventListener("click",(function(){te.resetValidation(),fe.open()})),e.addEventListener("click",(function(){var e=Z.getUserInfo();a.value=e.name,u.value=e.about,ee.resetValidation(),se.open()}))})();