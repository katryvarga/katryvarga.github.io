'use strict';
import { photoList } from './photoList.js';

let counter = 0;

const showedPictures = document.querySelector('#picture');
const photoDescription = document.querySelector('#description');
const iconList = document.querySelector('#iconGallery');
const rightButton = document.querySelector('#rightButton');
const leftButton = document.querySelector('#leftButton');
const body = document.querySelector('body');

const picture = document.createElement('img');
const title = document.createElement('h1');
const description = document.createElement('p');

picture.setAttribute('id', 'picture');
picture.setAttribute('src', photoList[0].url);
showedPictures.appendChild(picture);

title.setAttribute('class', 'photoTitle');
title.innerHTML = photoList[0].title;
photoDescription.appendChild(title);

description.setAttribute('class', 'photoDescription');
description.innerHTML = photoList[0].descr;
photoDescription.appendChild(description);

for (let i = 0; i < photoList.length; i++) {
  const iconDiv = document.createElement('div');
  iconDiv.setAttribute('class', 'iconDiv');

  const imgIcon = document.createElement('img');
  imgIcon.setAttribute('id', 'icon');
  imgIcon.setAttribute('src', photoList[i].url);
  imgIcon.setAttribute('loading', 'lazy');

  const mouseOn = document.createElement('p');
  mouseOn.setAttribute('class', 'notVisible');
  mouseOn.setAttribute('id', 'tooltip');
  mouseOn.innerText = photoList[i].title;

  if (i === 0) {
    imgIcon.setAttribute('class', 'selected');
  } else {
    imgIcon.setAttribute('class', 'notSelected');
  }
  iconList.appendChild(iconDiv);
  iconDiv.appendChild(mouseOn);
  iconDiv.appendChild(imgIcon);
}

const icon = document.querySelectorAll('#icon');

for (let i = 0; i < icon.length; i++) {
  icon[i].onclick = () => {
    title.innerHTML = photoList[i].title;
    description.innerHTML = photoList[i].descr;

    icon[i].setAttribute('class', 'selected');
    icon[counter].setAttribute('class', 'notSelected');
    const showPicture = icon[i].getAttribute('src');

    counter = i;
    picture.setAttribute('src', showPicture);
  };
}

const tooltip = document.querySelectorAll('#tooltip');
for (let i = 0; i < icon.length; i++) {
  icon[i].onmouseenter = () => {
    tooltip[i].setAttribute('class', 'visible');
  };
  icon[i].onmouseleave = () => {
    tooltip[i].setAttribute('class', 'notVisible');
  };
}

function clickTheButton() {
  title.innerHTML = photoList[counter].title;
  description.innerHTML = photoList[counter].descr;
  picture.setAttribute('src', photoList[counter].url);
  icon[counter].setAttribute('class', 'selected');
}

rightButton.onclick = () => {
  icon[counter].setAttribute('class', 'notSelected');
  if (counter === photoList.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
  clickTheButton();
};

leftButton.onclick = () => {
  icon[counter].setAttribute('class', 'notSelected');

  if (counter === 0) {
    counter = photoList.length - 1;
  } else {
    counter -= 1;
  }
  clickTheButton();
};

const middlePicture = document.createElement('img');

picture.onclick = () => {
  const selected = document.querySelector('.selected');
  const toTheMiddle = selected.getAttribute('src');
  middlePicture.setAttribute('id', 'middlePicture');
  middlePicture.setAttribute('src', toTheMiddle);
  body.appendChild(middlePicture);
};

middlePicture.onclick = () => {
  middlePicture.remove();
};
