/* Объявление глобальных переменных */

const cardsContainer = document.querySelector('.page__grid-items');
const cardTemplate = document.querySelector('.grid__template').content;
const popupZoomImgContainer = document.querySelector('.popup_zoom-image');
const popupImg = document.querySelector('.popup__img');
const buttonEditProfileName = document.querySelector('.profile__edit-button');
const popupEditProfileName = document.querySelector('.page__names-changes');
const popupProfileNameInput = document.getElementById('popup__name');
const popupProfilePositionInput = document.getElementById('popup__position');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__description');
const buttonClosePopupEditName = document.querySelector('.popup__close-button');
const buttonOpenPopupAddPicture = document.querySelector('.profile__plus-container');
const popupAddPicture = document.querySelector('.page__picture-changes');
const popupPictureNameInput = document.getElementById('name__place');
const popupPictureLinkInput = document.getElementById('picture__link');
const buttonClosePopupEditPicture = document.getElementById('popup__close-button');
const crossButtonClosePopupImg = document.querySelector('.popup-button_type_close');
const popupButtonCreateNewCard = document.getElementById('popup__createButton');
const popupImgTitle = document.querySelector('.popup__title');

/*Блок создания функций*/
/* Лайки для карточек выведены в отдельную функцию */

function clickOnLikeCard(heart) {
  heart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('grid-items__heart_type_active');
  });
};

/* Удаление карточек выведено в отдельную функцию */

function deleteCard(trash) {
  trash.addEventListener('click', function (event) {
    event.target.closest('.grid-items__item').remove();
  });
};

/* Функция открытия попапов */

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

/* Функция закрытия попапов */

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

/* Функция создания карточки */

function createCard(name, link, pictureName) {
  const card = cardTemplate.querySelector('.grid-items__item').cloneNode(true);
  const cardImg = card.querySelector('.grid-items__img');
  card.querySelector('.grid-items__place-name').textContent = name;
  cardImg.src = link;
  cardImg.alt = pictureName;

  clickOnLikeCard(card.querySelector('.grid-items__heart'));
  deleteCard(card.querySelector('.grid-items__trash'));

  cardImg.addEventListener('click', function () {
    openPopup(popupZoomImgContainer);
    popupImgTitle.textContent = name;
    popupImg.src = link;
    popupImg.alt = pictureName;
  });
  return card;
}

/* Загрузка первоначального массива карточек */

initialCardsList.forEach(function (item) {
  cardsContainer.append(createCard(item.placeName, item.link, item.pictureName));
});

/* Закрытие попапа-картинки */

crossButtonClosePopupImg.addEventListener('click', function () {
  closePopup(popupZoomImgContainer);
});

/* Закрытие попапа создания новой карточки */

popupButtonCreateNewCard.addEventListener('click', function () {
  closePopup(popupAddPicture);
});

/* Открытие и закрытие попапа для редактирования имени и позиции */

buttonEditProfileName.addEventListener('click', function () {
  openPopup(popupEditProfileName);
  popupProfileNameInput.value = profileName.textContent;
  popupProfilePositionInput.value = profilePosition.textContent;

});
buttonClosePopupEditName.addEventListener('click', function () {
  closePopup(popupEditProfileName);
});

/* Открытие и закрытие попапа для добавления картинки и названия*/

buttonOpenPopupAddPicture.addEventListener('click', function () {
  openPopup(popupAddPicture);
  formAddCard.reset();
});

buttonClosePopupEditPicture.addEventListener('click', function () {
  closePopup(popupAddPicture);
});

/*Замена имени и позиции на текст из попапа*/

const formEditProfile = document.getElementById('popup__profile-form');

formEditProfile.addEventListener('submit', function (e) {
  if (popupProfileNameInput.value === '' || popupProfilePositionInput.value === '') {
    alert("Необходимо ввести имя и должность");
    e.preventDefault();
  }
  else {
    e.preventDefault();
    profileName.textContent = popupProfileNameInput.value;
    profilePosition.textContent = popupProfilePositionInput.value;
    closePopup(popupEditProfileName);
  }
});

/* Добавление и удаление карточки */

const formAddCard = document.getElementById('popup__picture-profile-form');

formAddCard.addEventListener('submit', function (e) {
  if (popupPictureNameInput.value === '' || popupPictureLinkInput.value === '') {
    alert("Необходимо ввести название места и ссылку на изображение");
    openPopup(popupAddPicture);
    e.preventDefault();
  }
  else {
    e.preventDefault();
    cardsContainer.prepend(createCard(popupPictureNameInput.value, popupPictureLinkInput.value, popupPictureNameInput.value));
  }
});
