let gifImage = document.querySelector(".gifImageDiv")
let myVideo= document.querySelector('video')
let myButton=document.querySelector('button')
let design = document.querySelector('.switch')

//loading screan
window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        gifImage.style.display="none"
    },3000)
})


myButton.addEventListener('click',()=>{
    let state = design.classList.toggle("left")
    if(state){
        myVideo.pause()
    }else{
        myVideo.play()
    }
})

