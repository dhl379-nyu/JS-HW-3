let mainGrid = document.getElementById('mainGrid');

let jsonDatabase = [
  {
    "title" : "Gecko",
    "picURL" : "url('image1.jpg')",
    "color" : "#39403D",
    "lizards" : ["Usually small", "Short stout body", "Large head", "Usually nocturnal", "Cuts off tail when stressed"]
  },
  {
    "title" : "Red-eyed Crocodile Skink",
    "picURL" : "url('image2.jpg')",
    "color" : "#D97218",
    "lizards" : ["Looks like dragons", "Cream-colored belly", "Lives up to 6 years", "Plays dead when stressed"]
  },
  {
    "title" : "Blue-tongued Skink",
    "picURL" : "url('image3.jpg')",
    "color" : "#D9A79C",
    "lizards" : ["Not aggressive to humans", "Has a big appetite for meat", "Tongue is blue"]
  }
]

function createElement(jsonDatabase) {
  let newElement = document.createElement("div");
  newElement.style.backgroundColor = jsonDatabase['color'];
  newElement.classList.add('contentItem');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add("imgContainer");
  // imgContainer.style.backgroundImage = jsonDatabase['picURL'];

  let newImage = document.createElement('div');
  newImage.style.backgroundImage = jsonDatabase['picURL'];
  newImage.classList.add("newImage");
  imgContainer.appendChild(newImage);
  newElement.appendChild(imgContainer);
  mainGrid.appendChild(newElement);

  let newHeading = document.createElement("h2");
  newHeading.classList.add('contentTitle');
  newHeading.innerHTML = jsonDatabase['title'];

  newElement.appendChild(newHeading);

  let newList = document.createElement('ul');
  newElement.appendChild(newList);

  for (var i = 0; i < jsonDatabase['lizards'].length; i++) {
    var currentString = jsonDatabase['lizards'][i];
    var newItem = document.createElement('li');
    newItem.innerHTML = currentString;
    newList.appendChild(newItem);
  }


}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
