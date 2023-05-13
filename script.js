console.log('hello world')
let myVideo= document.querySelector('video')
let myButton=document.querySelector('button')
let design = document.querySelector('.switch')

myButton.addEventListener('click',()=>{
    let state = design.classList.toggle("left")
    if(state){
        myVideo.pause()
    }else{
        myVideo.play()
    }
})

