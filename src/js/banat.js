import banats from './banat.json' assert {type: 'json'};


let haveIt = [];

function generateUniqueRandom(maxNr) {
  //Generate random number
  let random = (Math.random() * maxNr).toFixed();

  //Coerce to number by boxing
  random = Number(random);

  if (!haveIt.includes(random)) {
    haveIt.push(random);
    return random;
  } else {
    if (haveIt.length < maxNr) {
      //Recursively generate number
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
let box = document.querySelector('.box')
let banat_choice = banats.banats.normal;

function smallScreen(x) {
  if (x.matches) {
    // If media query matches
    easter.style.transform = "translateY(2rem)";
  } else {
    easter.style.transform = "translateY(12rem)";
  }
}

var x = window.matchMedia("(max-width: 700px)");

const bisVid = document.querySelector('.bis-vid')

let isActive = true




logo.addEventListener("click", () => {
  bisVid.currentTime = 0;
  
  if (isActive == true) {
    console.log("run")
    bisVid.play()
  
 
  bisVid.style.display = "flex"
  
  console.log("works")
  banat_choice = banats.banats.bisaya;
  text_container.style.backgroundColor = "#00546a";
  smallScreen(x)
  text_container.style.backgroundColor = "#dadada00"
  box.style.backgroundColor = "#dadada00"
  text.style.color = "white"
  
    
  }else{
    hearts.style.visibility = "visible";
  bisVid.style.display = "none"
  bisVid.pause()
  console.log("works")
    hearts.style.visibility = "hidden";
    easter.style.visibility = "hidden";
    banat_choice = banats.banats.normal;
    text_container.style.backgroundColor = "#e47500";
   
  box.style.backgroundColor = "#1b2028"
  text.style.color = "white"



    
    smallScreen(x);
    console.log("Pause");
  }

  
  
  isActive = !isActive

  console.log(isActive)
});
mouse_sound2.addEventListener('ended',()=>{
  hearts.style.visibility = "hidden";
  easter.style.visibility = "hidden";
  banat_choice = banats;
  text_container.style.backgroundColor = "#e47500";
  smallScreen(x);
  console.log("Love U CJ");

})



copy_icon.addEventListener("click", () => {
  tip.style.visibility = "visible";
});

copy_icon.addEventListener("mouseout", () => {
  tip.style.visibility = "hidden";
});

copy_icon.addEventListener("click", () => {
  navigator.clipboard.writeText(bb);
});
//dinako kasabot
btn.addEventListener("click", () => {
 
  mouse_sound.play();
  let x = generateUniqueRandom(banat_choice.length - 1);
  if (x == false) {
    console.log(x);
    haveIt = [];
    x = generateUniqueRandom(banat_choice.length - 1);
  } else {
    console.log(x);
    bb = banat_choice[x];
    text.textContent = bb;
  }
});

//Created by Ian Nico - 
//Final version date : 09 - 20 -2022
