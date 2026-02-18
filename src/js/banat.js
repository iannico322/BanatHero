let haveIt = [];
let banats = null;
let banat_choice = [];

// Load JSON data first, then initialize the app
fetch('./banat.json')
  .then(res => res.json())
  .then(data => {
    banats = data;
    banat_choice = banats.banats.normal;
  })
  .catch(err => console.error("Failed to load banats:", err));


function generateUniqueRandom(maxNr) {
  let random = (Math.random() * maxNr).toFixed();
  random = Number(random);

  if (!haveIt.includes(random)) {
    haveIt.push(random);
    return random;
  } else {
    if (haveIt.length < maxNr) {
      return generateUniqueRandom(maxNr);
    } else {
      console.log("No more numbers available.");
      return false;
    }
  }
}

const logo = document.querySelector(".logo");
const easter = document.querySelector(".hehe");
const hearts = document.querySelector(".bubbling-heart");
const mouse_sound = document.querySelector(".click");
const mouse_sound2 = document.querySelector(".click2");
easter.textContent = "Congrats! You've unlocked The techy banats zone";

const text = document.querySelector(".text-change");
const text_container = document.querySelector(".text");
const tip = document.querySelector(".tooltiptext");

let btn = document.querySelector(".custom-btn");
let copy_icon = document.querySelector(".fa-regular");
let bb = "Nicolas ABCDe Inc.";
let box = document.querySelector('.box');

function smallScreen(x) {
  if (x.matches) {
    easter.style.transform = "translateY(2rem)";
  } else {
    easter.style.transform = "translateY(12rem)";
  }
}

var x = window.matchMedia("(max-width: 700px)");

const bisVid = document.querySelector('.bis-vid');
const vidBG = document.querySelector('.video-bg');

const options = document.querySelector('.options');

const bisaya = document.querySelector('#bisaya');
const tagalog = document.querySelector('#tagalog');
const it = document.querySelector('#it');


bisaya.addEventListener("click", () => {
  if (!banats) return;

  bisVid.currentTime = 0;
  mouse_sound2.pause();
  bisVid.play();

  options.style.color = "#e4e4e460";
  bisVid.style.display = "flex";
  vidBG.style.display = "flex";
  logo.style.fontFamily = "Arial, Helvetica, sans-serif";
  logo.style.color = "#dadada60";
  logo.style.textShadow = "#9e9e9e96";

  banat_choice = banats.banats.bisaya;
  text_container.style.backgroundColor = "#dadada00";
  box.style.backgroundColor = "#dadada00";
  text.style.color = "white";

  hearts.style.visibility = "hidden";
  easter.style.visibility = "hidden";

  smallScreen(x);
});


it.addEventListener('click', () => {
  if (!banats) return;

  bisVid.pause();
  mouse_sound2.play();

  options.style.color = "#23252C";
  bisVid.style.display = "none";
  vidBG.style.display = "none";

  logo.style.fontFamily = "'Bungee Spice', cursive";
  logo.style.color = "rgb(218, 218, 218)";
  logo.style.textShadow = "#23252c 2px 1px 2px";

  box.style.backgroundColor = "#1b2028";
  text.style.color = "white";

  hearts.style.visibility = "visible";
  easter.style.visibility = "visible";

  banat_choice = banats.banats.techy;
  text_container.style.backgroundColor = "#00546a";

  smallScreen(x);
});


tagalog.addEventListener('click', () => {
  if (!banats) return;

  mouse_sound2.pause();
  bisVid.pause();

  options.style.color = "#23252C";
  bisVid.style.display = "none";
  vidBG.style.display = "none";

  logo.style.fontFamily = "'Bungee Spice', cursive";
  logo.style.color = "rgb(218, 218, 218)";
  logo.style.textShadow = "#23252c 2px 1px 2px";

  logo.style.color = "#e47500";
  hearts.style.visibility = "hidden";
  easter.style.visibility = "hidden";

  banat_choice = banats.banats.normal;
  text_container.style.backgroundColor = "#e47500";

  box.style.backgroundColor = "#1b2028";
  text.style.color = "white";

  smallScreen(x);
});


copy_icon.addEventListener("click", () => {
  tip.style.visibility = "visible";
  navigator.clipboard.writeText(bb);
  setTimeout(() => {
    tip.style.visibility = "hidden";
  }, 1000);
});


btn.addEventListener("click", () => {
  if (!banats) {
    console.warn("Banats not loaded yet.");
    return;
  }

  mouse_sound.play();
  let x = generateUniqueRandom(banat_choice.length - 1);

  if (x == false) {
    haveIt = [];
    x = generateUniqueRandom(banat_choice.length - 1);
  }

  bb = banat_choice[x];
  text.textContent = bb;
});

//Created by Ian Nico -
//Final version date : 09 - 20 -2022
