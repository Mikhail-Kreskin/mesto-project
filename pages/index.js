const popupCloseName_button = document.querySelector('.popup__close-button');

/* Лайки для карточек выведены в отдельную функцию */

function clickCardsLike(heart) {
  heart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('grid-items__heart_type_active');
  });
};

/* Удаление карточек выведено в отдельную функцию */

function cardsDelete(trash) {
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

/* Переменные темплейта вынесены в отдельную функцию */
let cardsSources = [];
function createCards(source) {
  const gridTemplate = source.content;
  const gridItem = gridTemplate.querySelector('.grid-items__item').cloneNode(true);
  const gridPopupContainer = gridItem.querySelector('.grid-items__popup-container');
  return cardsSources = [gridItem, gridPopupContainer];
};

/* Первоначальная загрузка массива карточек */

const initialCardsList = [
  {
    placeName: "Dream job",
    link: "https://images.unsplash.com/photo-1625924033080-1e699217e433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlubm9wb2xpc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pictureName: "Innopolis.university"
  },
  {
    placeName: "Dream coding",
    link: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlYW0lMjBjb2RpbmclMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pictureName: "Coding place"
  },
  {
    placeName: "Dream chill",
    link: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRyZWFtJTIwY2hpbGwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pictureName: "Chill place"
  },
  {
    placeName: "Dream food",
    link: "https://images.unsplash.com/photo-1567745218034-06ff90f0e058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxmb29kJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    pictureName: "Food place"
  },
  {
    placeName: "Dream travel",
    link: "https://images.unsplash.com/photo-1664462581594-410425f5a1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRyZWFtJTIwdHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    pictureName: "Travel place"
  },
  {
    placeName: "Dream home",
    link: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    pictureName: "Dream home"
  },
];

var gridsContainer = document.querySelector('.page__grid-items');
initialCardsList.forEach(function (item) {
  createCards(document.querySelector('.grid__template'));
  cardsSources[0].querySelector('.grid-items__place-name').textContent = item.placeName;
  cardsSources[0].querySelector('.grid-items__img').src = item.link;
  cardsSources[0].querySelector('.grid-items__img').alt = item.pictureName;
  const gridImage = cardsSources[0].querySelector('.grid-items__img');
  gridImage.addEventListener('click', function () {
    openPopups(cardsSources[1]);
    cardsSources[0].querySelector('.grid-items__popup-title').textContent = item.placeName;
    cardsSources[0].querySelector('.grid-items__popup-img').src = gridImage.src;
    cardsSources[0].querySelector('.grid-items__popup-img').alt = gridImage.alt;
  });
  cardsSources[0].querySelector('.grid-items__close-button').addEventListener('click', function () {
    closePopups(cardsSources[1]);
  });
  gridsContainer.append(cardsSources[0]);

  clickCardsLike(cardsSources[0].querySelector('.grid-items__heart'));

  cardsDelete(cardsSources[0].querySelector('.grid-items__trash'));

});

/* Открытие и закрытие попапа для редактирования имени и позиции */

const editNames_button = document.querySelector('.profile__edit-button');
const popup_opened_namesChanges = document.querySelector('.page__names-changes');
const profileNameInput = document.getElementById('popup__name');
const profilePositionInput = document.getElementById('popup__position');

editNames_button.addEventListener('click', function () {
  openPopups(popup_opened_namesChanges);
  profileNameInput.value = "";
  profilePositionInput.value = "";
});
popupCloseName_button.addEventListener('click', function () {
  closePopups(popup_opened_namesChanges);
});

/* Открытие и закрытие попапа для редактирования картинки и названия*/

const editPictures_button = document.querySelector('.profile__plus-container');
const popup_opened_picturesChanges = document.querySelector('.page__picture-changes');
const pictureNameInput = document.getElementById('name__place');
const pictureLinkInput = document.getElementById('picture__link');
const popupClosePicture_button = document.getElementById('popup__close-button');
editPictures_button.addEventListener('click', function () {
  openPopups(popup_opened_picturesChanges);
  pictureNameInput.value = "";
  pictureLinkInput.value = "";
});

popupClosePicture_button.addEventListener('click', function () {
  closePopups(popup_opened_picturesChanges);
});

/*Замена имени и позиции на текст из попапа*/

const popupSaveButton = document.getElementById('popup__saveButton');

popupSaveButton.addEventListener('click', function () {
  if (profileNameInput.value === '' || profilePositionInput.value === '') {
    alert("Необходимо ввести имя и должность")
  }
  else {
    document.querySelector('.profile__name').textContent = "";
    document.querySelector('.profile__description').textContent = "";
    document.querySelector('.profile__name').textContent = profileNameInput.value;
    document.querySelector('.profile__description').textContent = profilePositionInput.value;
    closePopups(popup_opened_namesChanges);
  }
});

/* Добавление и удаление карточек */

const popupCreateButton = document.getElementById('popup__createButton');

popupCreateButton.addEventListener('click', function () {
  if (pictureNameInput.value === '' || pictureLinkInput.value === '') {
    alert("Необходимо ввести название места и ссылку на изображение")
  }
  else {
    createCards(document.querySelector('.grid__template'));
    cardsSources[0].querySelector('.grid-items__place-name').textContent = pictureNameInput.value;
    const gridImage = cardsSources[0].querySelector('.grid-items__img');
    gridImage.src = pictureLinkInput.value;
    gridImage.alt = pictureNameInput.value;
    gridsContainer.prepend(cardsSources[0]);
    clickCardsLike(cardsSources[0].querySelector('.grid-items__heart'));
    cardsDelete(cardsSources[0].querySelector('.grid-items__trash'));
    gridImage.addEventListener('click', function () {
      openPopups(cardsSources[1]);
      cardsSources[0].querySelector('.grid-items__popup-title').textContent = cardsSources[0].querySelector('.grid-items__place-name').textContent;
      cardsSources[0].querySelector('.grid-items__popup-img').src = gridImage.src;
      cardsSources[0].querySelector('.grid-items__popup-img').alt = gridImage.alt;
    });
    cardsSources[0].querySelector('.grid-items__close-button').addEventListener('click', function () {
      closePopups(cardsSources[1]);
    });
    closePopups(popup_opened_picturesChanges);
  }
});

