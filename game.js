window.addEventListener('DOMContentLoaded', () => {

    const panel1 = document.getElementById('panel-1')
    const head1 = document.getElementById('head-1')
    const head1button = document.getElementById('head-1-button')
    const head2button = document.getElementById('head-2-button')
    const head2 = document.getElementById('head-2')
    const kitty1 = document.getElementById('kitty-1')
    const kitty2 = document.getElementById('kitty-2')

    const eyes1 = document.getElementById('eyes-1')
    const eyes1kitty = document.getElementById('eyes-1-kitty')
    const eyes2 = document.getElementById('eyes-2')
    const eyes2kitty = document.getElementById('eyes-2-kitty')
    const eyes3 = document.getElementById('eyes-3')



    // panel1.addEventListener('click', () => {
    //     head1.style.display = 'none'
    // })

    // head2button.addEventListener('click', () => {
    //     kitty2.style.display = 'block'
    //     kitty1.style.display = 'none'
    // })
    // head1button.addEventListener('click', () => {
    //     kitty1.style.display = 'block'
    //     kitty2.style.display = 'none'
    // })
    eyes1.addEventListener('click', () => {
        
        panel1.innerHTML =`<img id="kitty-1" class="body" src="/Pensive-Kitty-Blank.png" alt="">
             
        <img id="eyes-1-kitty" class="body-button" src="/Pensive-Kitty-Eyes.png" alt="">`
        

    })
    eyes2.addEventListener('click', () => {
        panel1.innerHTML =`<img id="kitty-1" class="body" src="/Pensive-Kitty-Blank.png" alt="">
             
        <img id="eyes-2-kitty" class="body-button" src="/Pensive-Kitty-Eyes-v2.png" alt="">`

    })
    eyes3.addEventListener('click', () => {
        panel1.innerHTML =`<img id="kitty-1" class="body" src="/Pensive-Kitty-Blank.png" alt="">
             
        <img id="eyes-3-kitty" class="body-button" src="/Pensive-Kitty-Eyes-Closed-White.png" alt="">`

    })

})