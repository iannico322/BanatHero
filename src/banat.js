let banats = [
"Kung akoa ka, yahay kayka",
"kung ang english ng asol ay blue, bakit palaging ikaw naiisip ko",
"Ang gugma murag ako, so gugmaa nako",
"Kung magkakaroon ako ng sariling planeta, gusto ko ikaw lang ang axis nito, ....para sayo lang iikot ang mundo ko.",
"Para tayong kwento ni Juan Tamad. Ako si Juan Tamad at ikaw yung bayabas...Hinihintay lang kitang mahulog sa akin.",
" Sana exam mo nalang din ako... para sagutin mo din ako.",
"Ang galing mo din ano? Di mo pa nga ako binabato, tinamaan na ko sayo.",
"Sana ako lang si antok...para gabi gabi pwede kitang dalawin",
"Dalawa lang ang pwedeng mangyari. Either magmurahan tayo or magmahalan tayo",
"Tindera ka ba ng yosi? kasi you give me HOPE..and MORE",
"Magaling ka ba sa algebra? Can you substitute my 'x'?",
"Calculator ka ba? Kasi, sa 'yo pa lang, solved na ko.",
"Peter pan said when you think of happy things you fly but when I thought about you I fell.",
"kung si Ed Caluag may nakikitang iba, ako wala ikaw lang talaga.",
"ikakagalit ba ni Jessica sojo kung d umano akoy nahulog sayo",
"I don't like math but I lab yo so maths",
"My favorite word is universe cause it start with u n i",
"My parents said to focus on my future. so im focusing on you",
" I love \"W\" but \"double\" is silent.",
"do you love yourself? i think we love the same person",
"fliptop ka ng fliptop wla ka namang lolipop dto ka nlang sakin mamahalin kita nonestop yieeeee",
"wow you're mom must be a great baker, cuz she made such a cutie pie",
"I have humor but i love hu-mor",
"I thought happiness is starting with \"H\" but it's actually starting in \"U\".",
"No pen no paper but you still draw my attention",
"What if you are given a chance to talk to your future? Ano pag uusapan natin?",
"are u a secret? cuz i don't think i can share u",
"Para na akong london bridge dahil sayo. I'm falling down",
"Kung si rizal tinamaan sa likod,ako naman tinamaan sayo",
"baliktarin mo ung tapat oh diba walang nagbago ikaw parin mahal ko",
"Gwapo ko"
]
let banat_for_IT = [
"A life without you, would be like a computer without an OS.",
"Are you a double? The thought of you always floats inside my head.",
"Are you an applet? You make me feel all GUI (gooey) inside.",
"Baby are you a motherboard?, Cause I'd \"RAM\" you all night long.",
"Baby you must be Google Glasses, because you augment my reality",
"Baby, if they made you in C, you would have a pointer to my heart.",
"Baby, you make my floppy disk turn into a hard drive",
"Baby, you must be running a TCP protocol, since every time I talk to you, your body gives me an acknowledgment!",
"Before you, I was a PC without a power outlet.",
"Can I stick my USB drive in your USB port?",
"Can you be my ActionListener? That way you notice everything that I do.",
"Can you be my private variable? I want to be the only one with access to you.",
"Do u like me? Text '1' for 'Yes,' '2' for 'No.",
"hey, are you Wi-Fi? Cuz im feeling the connection!",
"You are hotter than the bottom of my laptop.",
"01001001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101 00100000 01101101 01101111 01110010 01100001 00100000 01110100 01101000 01100001 01101110 00100000 00110011 00110000 00110000 00110000",
"Hey baby, lets turn off our firewalls and connect our Ethernet cable.",
"I am a Boolean method whose love will always return true.",
"I am the field attribute in your class: I can't exist unless you do.",
"I googled your name earlier... I clicked on 'I'm Feeling Lucky.'",
"I think we should increase our bandwidth.",
"I think you could be an integral part of my project life cycle.",
"I think you're my compiler. My life wouldn't start without you.",
"I would love to stick my pins into your sockets.",
"I'll always have cache for you.",
"If I was an operating system, your process would have top priority.",
"If I were a method, you must be my parameter, because I will always need you.",
"Is your name Google? Because you have everything I've been searching for.",
"Isn't your e-mail\n address\n beautifulgirl@mydreams.com?",
"Let me be the 'throws Exception' to your 'public static void main (String[] args)'. I will accept whatever you give me.",
"My love for you is a constant variable: unupdatable and unchangeable.",
"My love is a for loop without the increment operator— infinitive, non-terminating, and difficult to stop once it starts running",
"My main method is 'public love iLoveYou().'",
"Nobody turns me on from a cold boot like you.",
"Trust me, I'm user friendly.",
"We are an aggregation of classes: one cannot exist without the other.",
"You are my increment operator. You make my value increase.",
"You are my semicolon; always present in everything I do.",
"You are the IDE of my life: I find it easier because of you.",
"You auto-complete me."
]




let haveIt = [];

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}







const logo = document.querySelector(".logo")
const easter = document.querySelector(".hehe")
const mouse_sound = document.querySelector(".click")
const mouse_sound2 = document.querySelector(".click2")
easter.textContent = "Congrats! You've unlock The techy banats zone";

const text = document.querySelector('.text-change')
const text_container = document.querySelector(".text")
const tip = document.querySelector('.tooltiptext')

let btn = document.querySelector('.custom-btn')
let copy_icon = document.querySelector('.fa-regular')
let bb = " "
let banat_choice = banats



function smallScreen(x) {
    if (x.matches) { // If media query matches
        easter.style.transform= "translateY(2rem)"
    } else {
        easter.style.transform= "translateY(12rem)"
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")

  


logo.addEventListener('click',()=>{
    mouse_sound2.play();
    easter.style.visibility = "visible"
    banat_choice = banat_for_IT
    text_container.style.backgroundColor = "#00546a"
    smallScreen(x)
})
logo.addEventListener('dblclick',()=>{
    mouse_sound2.pause()
    easter.style.visibility = "hidden"
    banat_choice = banats
    text_container.style.backgroundColor = "#e47500"
    smallScreen(x)
    console.log("eror")
})

copy_icon.addEventListener('click',()=>{
    tip.style.visibility = "visible"
})

copy_icon.addEventListener('mouseout',()=>{
    tip.style.visibility = "hidden"
})

copy_icon.addEventListener('click',()=>{
    navigator.clipboard.writeText(bb);
})





btn.addEventListener('click',()=>{
    mouse_sound.play()
    let x = generateUniqueRandom((banat_choice.length)-1)
    if(x==false){
        console.log(x)
        haveIt = []
        x = generateUniqueRandom((banat_choice.length)-1)
    }else{
        console.log(x)
        bb = banat_choice[x] 
        text.textContent = bb
    }
    

})