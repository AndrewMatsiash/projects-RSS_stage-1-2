let array = [
  {
    "name": "Jennifer",
    "img": "../../assets/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": "0"
  },
  {
    "name": "Sophia",
    "img": "../../assets/img/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": "1"
  },
  {
    "name": "Woody",
    "img": "../../assets/img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"],
    "id": "2"
  },
  {
    "name": "Scarlett",
    "img": "../../assets/img/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": "3"
  },
  {
    "name": "Katrine",
    "img": "../../assets/img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": "4"
  },
  {
    "name": "Timmy",
    "img": "../../assets/img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"],
    "id": "5"
  },
  {
    "name": "Freddie",
    "img": "../../assets/img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": "6"
  },
  {
    "name": "Charly",
    "img": "../../assets/img/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"],
    "id": "7"
  }
]

const body = document.querySelector(".body");
const wrapper = document.querySelector(".wrapper");
const menuBurgerIcon = document.querySelector(".menu__burger");
const logo = document.querySelector(".logo__text");
const navMenu = document.querySelector(".menu");
const logoBurgerMenu = document.querySelector(".logo__burger-menu");
const navMenulist = document.querySelector(".menu__list");
const navMenulink = document.querySelectorAll(".menu__link");
const classOpen = "open";
const classActive = "active";
const classLoked = "loked";
const classShadow = "shadow";
const classDisabledLink = "disabled-link";

const toggleClass = (elem, className) => {
  elem.classList.toggle(className);
};

const addTheСlass = (elem, className) => {
  elem.classList.add(className);
};

const removeClass = (elem, className) => {
  elem.classList.remove(className);
};

const removeClassesElements = () => {
  removeClass(body, classLoked);
  removeClass(menuBurgerIcon, classOpen);
  removeClass(navMenu, classOpen);
  removeClass(wrapper, classShadow);
}

const bodyLockUnlock = () => {
  if (body.classList.contains('loked')) {
    removeClass(body, classLoked);
  } else {
    addTheСlass(body, classLoked)
    toggleClass(logo, classOpen);
  }
}

menuBurgerIcon.addEventListener("click", () => {
  toggleClass(menuBurgerIcon, classOpen);
  toggleClass(navMenu, classOpen);
  toggleClass(wrapper, classShadow);
  addTheСlass(logoBurgerMenu, classOpen);
  toggleClass(logo,classOpen)
  bodyLockUnlock()
});

navMenulist.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__link")) {
    removeClassesElements()
  }
});

wrapper.addEventListener("click", (event) => {
  if (event.target.classList.contains("header")) {
   removeClassesElements()
  }
});



///////corusel////

// async function getData() {
//   const res = await fetch("main.json");
//   const data = await res.json();
//   console.log(data);
// }
// getData();


function CreateCardleft(n) {
  const card1 = document.createElement("div");
  card1.classList.add("card", `card-btn-${n}`);
  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img", `card-btn-${n}`);
  cardImg.src = array[n].img;
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card__title",`card-btn-${n}`);
  cardTitle.innerText = array[n].name;
  const cardBtn = document.createElement("button");
  cardBtn.classList.add("button", "card-btn");
  cardBtn.innerText = "Learn more";
  cardBtn.classList.add(`card-btn-${n}`)
  card1.appendChild(cardImg);
  card1.appendChild(cardTitle);
  card1.appendChild(cardBtn);
  itemLeft.appendChild(card1);
}

function CreateCardRight(n) {
  const card1 = document.createElement("div");
  card1.classList.add("card", `card-btn-${n}`);
  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img", `card-btn-${n}`);
  cardImg.src = array[n].img;
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card__title", `card-btn-${n}`);
  cardTitle.innerText = array[n].name;
  const cardBtn = document.createElement("button");
  cardBtn.classList.add("button", "card-btn");
  cardBtn.innerText = "Learn more";
  cardBtn.classList.add(`card-btn-${n}`)
  card1.appendChild(cardImg);
  card1.appendChild(cardTitle);
  card1.appendChild(cardBtn);
  itemRight.append(card1);
}


const BtnRight = document.querySelector("#btn-right");
const BtnLeft = document.querySelector("#btn-left");
const corusel = document.querySelector("#corusel");
const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");
const itemActive = document.querySelector("#item-active");

itemActive.addEventListener('click', (e) => {
  if (e.target.classList.contains('card-btn-0')) {
    popupCreate(0)
  }
  if (e.target.classList.contains('card-btn-1')) {
    popupCreate(1)
  }
  if (e.target.classList.contains('card-btn-2')) {
    popupCreate(2)
  }
  if (e.target.classList.contains('card-btn-3')) {
    popupCreate(3)
  }
  if (e.target.classList.contains('card-btn-4')) {
    popupCreate(4)
  }
  if (e.target.classList.contains('card-btn-5')) {
    popupCreate(5)

  }
  if (e.target.classList.contains('card-btn-6')) {
    popupCreate(6)

  }
  if (e.target.classList.contains('card-btn-7')) {
    popupCreate(7)

  }
})


const moveRight = () => {
  corusel.classList.add("transition-right");
  BtnRight.removeEventListener("click", moveRight);
  BtnLeft.removeEventListener("click", moveLeft);
};

const moveLeft = () => {
  corusel.classList.add("transition-left");
  BtnLeft.removeEventListener("click", moveLeft);
  BtnRight.removeEventListener("click", moveRight);
};

BtnLeft.addEventListener("click", moveLeft);
BtnRight.addEventListener("click", moveRight);

let widthWindow = window.innerWidth



let arr = [2, 6, 3]

function random() {
  console.log(arr);
  function generationNumber() {
    let num = Math.floor(Math.random() * 8);
    return num
  }

  while (arr.length < 6) {
    let num1 = generationNumber();
    if (!arr.includes(num1)) {
      arr.push(num1)
    }
  }
  arr = arr.slice(3)
  console.log(arr);
  return arr
}

corusel.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    corusel.classList.remove("transition-left");
    const leftItems = itemLeft.innerHTML;
    document.querySelector("#item-active").innerHTML = leftItems;
    itemLeft.innerHTML = "";

    let numberAnimals = random()

    if (widthWindow >= 1280) {
      console.log(1280);
      CreateCardleft(numberAnimals[0])
      CreateCardleft(numberAnimals[1])
      CreateCardleft(numberAnimals[2])
    } else if (widthWindow <= 768) {
      console.log(768);
      CreateCardleft(numberAnimals[0])
      CreateCardleft(numberAnimals[1])
    } else if (widthWindow <= 320) {
      console.log(320);
      CreateCardleft(numberAnimals[2])
    }


  } else {
    corusel.classList.remove("transition-right");
    const rightItems = itemRight.innerHTML;
    document.querySelector("#item-active").innerHTML = rightItems;
    itemRight.innerHTML = "";

    let numberAnimals = random()

    if (widthWindow >= 1280) {
      console.log(1280);
      CreateCardRight(numberAnimals[0])
      CreateCardRight(numberAnimals[1])
      CreateCardRight(numberAnimals[2])
    } else if (widthWindow === 768) {
      console.log(768);
      CreateCardRight(numberAnimals[0])
      CreateCardRight(numberAnimals[1])
    } else if (widthWindow === 320) {
      console.log(320);
      CreateCardRight(numberAnimals[2])
    }

  }
  BtnLeft.addEventListener("click", moveLeft);
  BtnRight.addEventListener("click", moveRight);
});




//////Popup/////
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupimg = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-title');
const popupSubtitle = document.querySelector('.popup-subtitle');
const popupDiscriptionText = document.querySelector('.discription__text');
const popupAge = document.querySelector('.age');
const popupInoculations = document.querySelector('.inoculations');
const popupdIseases = document.querySelector('.diseases');
const cardBtns = document.querySelectorAll('.card-btn')

//   async function  getDatas () {
//     let array = [];
//     async function getData() {
//       const pets = 'main.json';
//       const res = await fetch(pets);
//       const data = await res.json();
//       return data;
//     }
//     array = await getData();
// // popupTitle.innerText =
// //     console.log(array[1]);
//   }
// getDatas()

const popupCreate = (numberAnimals) => {
  popupimg.src = array[numberAnimals].img
  popupTitle.innerText = array[numberAnimals].name
  popupSubtitle.innerText = array[numberAnimals].breed
  popupDiscriptionText.innerText = array[numberAnimals].description
  popupAge.innerText = array[numberAnimals].age
  popupOpen()
}


const popupOpen = () => {
  addTheСlass(popup, classOpen)
  addTheСlass(popupContent, classOpen)
  bodyLockUnlock()
}

const popupClose = () => {
  removeClass(popup, classOpen)
  removeClass(popupContent, classOpen)
  bodyLockUnlock()
}

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup__body")) {
    popupClose()
  }
  if (event.target.classList.contains("popup__close")) {
    popupClose()
  }
})

