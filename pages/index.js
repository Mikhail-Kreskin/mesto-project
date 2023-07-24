const container = document.querySelector('.page');
const editNames_button = document.querySelector('.profile__edit-button');
const editPictures_button = document.querySelector('.profile__plus-container');
const popup_opened_namesChanges = document.querySelector('.page__names-changes');
const popup_opened_picturesChanges = document.querySelector('.page__picture-changes');
const popupCloseName_button = document.querySelector('.popup__close-button');
const popupClosePicture_button = document.getElementById('popup__close-button');
let gridsContainer = document.querySelector('.page__grid-items');
const profileNameInput = document.getElementById('popup__name');
const profilePositionInput = document.getElementById('popup__position');
const pictureNameInput = document.getElementById('name__place');
const pictureLinkInput = document.getElementById('picture__link');

/* Первоначальная загрузка массива карточек */

  let initialCardsList = [
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

  initialCardsList.forEach(function (item) {
    const gridTemplate = document.querySelector('.grid__template').content;
    const gridItem = gridTemplate.querySelector('.grid-items__item').cloneNode(true);
    const gridPopupContainer = gridItem.querySelector('.grid-items__popup-container');
    gridItem.querySelector('.grid-items__place-name').textContent = item.placeName;
    gridItem.querySelector('.grid-items__img').src = item.link;
    gridItem.querySelector('.grid-items__img').alt = item.pictureName;
    const gridImage = gridItem.querySelector('.grid-items__img');
    gridImage.addEventListener('click', function () {
      gridPopupContainer.classList.add("popup_opened");
      gridItem.querySelector('.grid-items__popup-title').textContent = gridItem.querySelector('.grid-items__place-name').textContent;
      gridItem.querySelector('.grid-items__popup-img').src = gridImage.src;
      gridItem.querySelector('.grid-items__popup-img').alt = gridImage.alt;
    });
    gridItem.querySelector('.grid-items__close-button').addEventListener('click', function () {
      gridPopupContainer.classList.remove("popup_opened");
    });
    gridsContainer.append(gridItem);


    gridItem.querySelector('.grid-items__heart').addEventListener('click', function (evt) {
      evt.target.classList.toggle('grid-items__heart_type_active');
    });

    gridItem.querySelector('.grid-items__trash').addEventListener('click', function (event) {
      event.target.closest('.grid-items__item').remove();
    });
  });

/* Открытие и закрытие попапа для редактирования имени и позиции */
editNames_button.addEventListener('click', function () {
  popup_opened_namesChanges.classList.add("popup_opened");
  profileNameInput.value = "";
  profilePositionInput.value = "";
});

popupCloseName_button.addEventListener('click', function () {
  popup_opened_namesChanges.classList.remove("popup_opened");
});

/* Открытие и закрытие попапа для редактирования картинки и названия*/
editPictures_button.addEventListener('click', function () {
  popup_opened_picturesChanges.classList.add("popup_opened");
  pictureNameInput.value = "";
  pictureLinkInput.value = "";
});

popupClosePicture_button.addEventListener('click', function () {
  popup_opened_picturesChanges.classList.remove("popup_opened");
});

/*Замена имени и позиции на текст из попапа*/

const popupSaveButton = document.getElementById('popup__saveButton');

popupSaveButton.addEventListener('click', function () {
  if (profileNameInput.value === '' || profilePositionInput.value === '') {
    alert("Необходимо ввести имя или должность")
  }
  else {
    document.querySelector('.profile__name').textContent = "";
    document.querySelector('.profile__description').textContent = "";
    document.querySelector('.profile__name').textContent = profileNameInput.value;
    document.querySelector('.profile__description').textContent = profilePositionInput.value;
    popup_opened_namesChanges.classList.remove("popup_opened");
  }
});

/* Добавление и удаление карточек */

const popupCreateButton = document.getElementById('popup__createButton');

popupCreateButton.addEventListener('click', function () {
  if (pictureNameInput.value === '' || pictureLinkInput.value === '') {
    alert("Необходимо ввести название места или ссылку на изображение")
  }
  else {
    const gridTemplate = document.querySelector('.grid__template').content;
    const gridItem = gridTemplate.querySelector('.grid-items__item').cloneNode(true);
    const gridPopupContainer = gridItem.querySelector('.grid-items__popup-container');
    gridItem.querySelector('.grid-items__place-name').textContent = pictureNameInput.value;
    const gridImage = gridItem.querySelector('.grid-items__img');
    gridImage.src = pictureLinkInput.value;
    gridImage.alt = pictureNameInput.value;
    gridsContainer.prepend(gridItem);

    gridItem.querySelector('.grid-items__heart').addEventListener('click', function (evt) {
      evt.target.classList.toggle('grid-items__heart_type_active');
    });
    gridItem.querySelector('.grid-items__trash').addEventListener('click', function (event) {
      event.target.closest('.grid-items__item').remove();
    });

    gridImage.addEventListener('click', function () {
      gridPopupContainer.classList.add("popup_opened");
      gridItem.querySelector('.grid-items__popup-title').textContent = gridItem.querySelector('.grid-items__place-name').textContent;
      gridItem.querySelector('.grid-items__popup-img').src = gridImage.src;
      gridItem.querySelector('.grid-items__popup-img').alt = gridImage.alt;
    });
    gridItem.querySelector('.grid-items__close-button').addEventListener('click', function () {
      gridPopupContainer.classList.remove("popup_opened");
    });
    popup_opened_picturesChanges.classList.remove("popup_opened");
  }
});
