/* Объявление глобальных переменных */

const cardsContainer = document.querySelector('.page__grid-items');
const cardsTemplate = document.querySelector('.grid__template').content;
const popupZoomImgContainer = document.querySelector('.popup_zoom-image');
const popupImg = document.querySelector('.popup__img');
const editNames_button = document.querySelector('.profile__edit-button');
const popup_opened_namesChanges = document.querySelector('.page__names-changes');
const profileNameInput = document.getElementById('popup__name');
const profilePositionInput = document.getElementById('popup__position');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__description');
const buttonClosePopupEditName = document.querySelector('.popup__close-button');
const editPictures_button = document.querySelector('.profile__plus-container');
const popup_opened_picturesChanges = document.querySelector('.page__picture-changes');
const pictureNameInput = document.getElementById('name__place');
const pictureLinkInput = document.getElementById('picture__link');
const buttonClosePopupEditPicture = document.getElementById('popup__close-button');

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

function openPopups(open_button) {
  open_button.classList.add("popup_opened");
};

/* Функция закрытия попапов */

function closePopups(close_button) {
  close_button.classList.remove("popup_opened");
};

/* Функция создания карточки */

function createCard(internalTemplateContainer, cardsImage) {
  clickOnLikeCard(internalTemplateContainer.querySelector('.grid-items__heart'));
  deleteCard(internalTemplateContainer.querySelector('.grid-items__trash'));

  cardsImage.addEventListener('click', function () {
    openPopups(popupZoomImgContainer);
    document.querySelector('.popup__title').textContent = internalTemplateContainer.querySelector('.grid-items__place-name').textContent;
    popupImg.src = cardsImage.src
    popupImg.alt = gridImage.alt;
  });
};


/* Первоначальная загрузка массива карточек */

initialCardsList.forEach(function (item) {
  const internalTemplateContainer = cardsTemplate.querySelector('.grid-items__item').cloneNode(true);
  const cardsImage = internalTemplateContainer.querySelector('.grid-items__img');
  internalTemplateContainer.querySelector('.grid-items__place-name').textContent = item.placeName;
  cardsImage.src = item.link;
  cardsImage.alt = item.pictureName;
  createCard(internalTemplateContainer, cardsImage);
  cardsContainer.append(internalTemplateContainer);
});

/* Закрытие попапа с картинкой */

document.querySelector('.popup-button_type_close').addEventListener('click', function () {
  closePopups(popupZoomImgContainer);
});

/* Закрытие попапа с созданием новых карточек */

document.getElementById('popup__createButton').addEventListener('click', function () {
  closePopups(popup_opened_picturesChanges);
});

/* Открытие и закрытие попапа для редактирования имени и позиции */

editNames_button.addEventListener('click', function () {
  openPopups(popup_opened_namesChanges);
  profileNameInput.value = profileName.textContent;
  profilePositionInput.value = profilePosition.textContent;

});
buttonClosePopupEditName.addEventListener('click', function () {
  closePopups(popup_opened_namesChanges);
});

/* Открытие и закрытие попапа для редактирования картинки и названия*/

editPictures_button.addEventListener('click', function () {
  openPopups(popup_opened_picturesChanges);
  document.getElementById('popup__picture-profile-form').reset();
});

buttonClosePopupEditPicture.addEventListener('click', function () {
  closePopups(popup_opened_picturesChanges);
});

/*Замена имени и позиции на текст из попапа*/

const popupSaveForm = document.getElementById('popup__profile-form');

popupSaveForm.addEventListener('submit', function (e) {
  if (profileNameInput.value === '' || profilePositionInput.value === '') {
    alert("Необходимо ввести имя и должность");
    e.preventDefault();
  }
  else {
    e.preventDefault();
    profileName.textContent = profileNameInput.value;
    profilePosition.textContent = profilePositionInput.value;
    closePopups(popup_opened_namesChanges);
  }
});

/* Добавление и удаление новых карточек */

const popupCreateCardForm = document.getElementById('popup__picture-profile-form');

popupCreateCardForm.addEventListener('submit', function (e) {
  if (pictureNameInput.value === '' || pictureLinkInput.value === '') {
    alert("Необходимо ввести название места и ссылку на изображение");
    openPopups(popup_opened_picturesChanges);
    e.preventDefault();
  }
  else {
    e.preventDefault();
    const internalTemplateContainer = cardsTemplate.querySelector('.grid-items__item').cloneNode(true);
    const cardsImage = internalTemplateContainer.querySelector('.grid-items__img');
    internalTemplateContainer.querySelector('.grid-items__place-name').textContent = pictureNameInput.value;
    cardsImage.src = pictureLinkInput.value;
    cardsImage.alt = pictureNameInput.value;
    createCard(internalTemplateContainer, cardsImage);
    cardsContainer.prepend(internalTemplateContainer);
  }
});
