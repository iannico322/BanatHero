let banats = ["Kung akoa ka, yahay kayka",
"kung ang english ng asol ay blue, bakit palaging ikaw naiisip ko",
"Ang gugma murag ako, so gugmaa nako"]


const text = document.querySelector('.text-change')
const tip = document.querySelector('.tooltiptext')

let btn = document.querySelector('.custom-btn')
let copy_icon = document.querySelector('.fa-regular')
let bb = " "
copy_icon.addEventListener('mouseover',()=>{
    tip.style.visibility = "visible"
})

copy_icon.addEventListener('mouseout',()=>{
    tip.style.visibility = "hidden"
})

copy_icon.addEventListener('click',()=>{
    navigator.clipboard.writeText(bb);
})





btn.addEventListener('click',()=>{
    let x = Math.floor((Math.random() * banats.length))
    console.log(x)
    bb = banats[x] 
    text.textContent = bb

})