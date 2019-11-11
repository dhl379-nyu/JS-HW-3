let mainGrid = document.getElementById('mainGrid');

let jsonDatabase = [
  {
    "title" : "Gecko",
    "picURL" : "1.jpg",
    "color" : "#39403D",
    "spoons" : ["Usually small", "Short stout body", "Large head", "Usually nocturnal", "Cuts off tail when stressed"]
  },
  {
    "title" : "Red-eyed Crocodile Skink",
    "picURL" : "2.jpg",
    "color" : "#D97218",
    "spoons" : ["Looks like dragons", "Cream-colored belly", "Lives up to 6 years", "Plays dead when stressed"]
  },
  {
    "title" : "Blue-tongued Skink",
    "picURL" : "3.jpg",
    "color" : "#D9A79C",
    "spoons" : ["Not aggressive to humans", "Has a big appetite for meat", "Tongue is blue"]
  }
]

function createElement(jsonDatabase) {
  let newElement = document.createElement("div");
  newElement.style.backgroundColor = jsonDatabase['color'];
  newElement.classList.add('contentItem');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add("imgContainer");

  let newImage = document.createElement('img');
  newImage.src = jsonDatabase['picURL'];
  imgContainer.appendChild(newImage);
  newElement.appendChild(imgContainer);
  mainGrid.appendChild(newElement);

  let newHeading = document.createElement("h2")
  newHeading.classList.add('contenTitle');
  newHeading.innerHTML = jsonDatabase['title'];

  newElement.appendChild(newHeading);

  let newList = document.createElement('ul');
  newElement.appendChild(newList);

  for (var i = 0; i < jsonDatabase['spoons'].length; i++) {
    var currentString = jsonDatabase['spoons'][i];
    var newItem = document.createElement('li');
    newItem.innerHTML = currentString;
    newList.appendChild(newItem);
  }


}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
