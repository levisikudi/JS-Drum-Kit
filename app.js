const keys = document.querySelectorAll('.key')

//a function that plays the corresponding sound based on the data key
const playSound = (e) =>{
    const audio = document.querySelector(`audio[data-key='${e.key}']`)
    const key = document.querySelector(`.key[data-key='${e.key}']`)
    
    if(!audio) return; // stops the function from running
    audio.currentTime = 0; // resets the time to 0 for each time a valid key is pressed
    audio.play()
    key.classList.add('playing')
    
   
}

window.addEventListener('keydown', playSound)



keys.forEach(el => {  //accesses each item on the NodeList
    //add event listener that listens for transition end property
    el.addEventListener('transitionend', e =>{ 
        el.classList.remove('playing') //removes the playing class
    })   
});
