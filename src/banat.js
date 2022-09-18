let banats = ["Kung akoa ka, yahay kayka",
"kung ang english ng asol ay blue, bakit palaging ikaw naiisip ko",
"Ang gugma murag ako, so gugmaa nako"]


const text = document.querySelector('.text-change')

let btn = document.querySelector('.custom-btn')

btn.addEventListener('click',()=>{
    let x = Math.floor((Math.random() * banats.length))
    console.log(x)
    text.textContent = banats[x] 

})