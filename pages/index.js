const container = document.querySelector('.page');
let editNames_button = document.querySelector('.profile__edit-button');
let editPictures_button = document.querySelector('.profile__plus-container');
let popup_opened_namesChanges = document.querySelector('.page__names-changes');
let popup_opened_picturesChanges = document.querySelector('.page__picture-changes');
let popupCloseName_button = document.querySelector('.popup__close-button');
let popupClosePicture_button = document.getElementById('popup__close-button');
/*const profileInfo = document.querySelector('.profile__info');*/


/* Открытие и закрытие попапа для редактирования имени и позиции */
editNames_button.addEventListener('click', function () {
  popup_opened_namesChanges.classList.add("popup_opened");
});

popupCloseName_button.addEventListener('click', function () {
  popup_opened_namesChanges.classList.remove("popup_opened");
});

/* Открытие и закрытие попапа для редактирования картинки и названия*/
editPictures_button.addEventListener('click', function () {
  popup_opened_picturesChanges.classList.add("popup_opened");
});

popupClosePicture_button.addEventListener('click', function () {
  popup_opened_picturesChanges.classList.remove("popup_opened");
});

/*Открытие и закрытие попапа с картникой*/

/*Замена имени и позиции на текст из попапа*/
let popupSaveButton = document.getElementById('popup__saveButton');

popupSaveButton.addEventListener('click', function () {

  document.querySelector('.profile__name').textContent = "";
  document.querySelector('.profile__description').textContent = "";
  let profileNameInput = document.getElementById('popup__name').value;
  let profilePositionInput = document.getElementById('popup__position').value;
  document.querySelector('.profile__name').textContent = profileNameInput;
  document.querySelector('.profile__description').textContent = profilePositionInput;
  popup_opened_namesChanges.classList.remove("popup_opened");
});

/*const NameContainer = document.createElement('h1');
  NameContainer.classList.add('profile__name');
  NameContainer.textContent = profileName;
  profileInfo.append(NameContainer);
*/
