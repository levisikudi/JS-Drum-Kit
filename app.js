window.addEventListener('keydown', e =>{
    const audio = document.querySelector(`audio[data-key='${e.key}']`)
    const key = document.querySelector(`.key[data-key='${e.key}']`)
    if(!audio) return; // stops the function from running
    audio.currentTime = 0; // resets the time to 0 for each time a valid key is pressed
    audio.play()
    key.classList.add('playing')
    console.log(audio);
   
})

const keys = document.querySelectorAll('.key')
console.log(keys);

keys.forEach(el => {
    el.addEventListener('transitionend', e =>{
        el.classList.remove('playing')
    })   
});

// keys.addEventListener('transitionend', e ={
    
// })