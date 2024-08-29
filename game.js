window.addEventListener('DOMContentLoaded', (event) => {

    event.preventDefault()
    
    const resetButton = document.getElementById('reset-button')

    const panel1 = document.getElementById('panel-1')

    const eyes1 = document.getElementById('eyes-1')
    
    const eyes2 = document.getElementById('eyes-2')
    
    const eyes3 = document.getElementById('eyes-3')
    const eyes4 = document.getElementById('eyes-4')
    
    const page2button = document.getElementById('page-2-button')
    
    const pageContainer = document.getElementById('page-container')

    let counter = 1; //for page traversal

    eyes1.addEventListener('click', () => {
        
        const html = `<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">

        <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">
        
        <img id="eyes-1-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes.png" alt="">`

        panel1.innerHTML = html

        sessionStorage.setItem('eye-choice', html)
        
    })
    eyes2.addEventListener('click', () => {

        const html = `<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">

        <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">
        
        <img id="eyes-2-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes-v2.png" alt="">`

        panel1.innerHTML = html
        
        sessionStorage.setItem('eye-choice', html)
        
    })
    eyes3.addEventListener('click', () => {
        panel1.innerHTML =`<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">

        <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">
        
        <img id="eyes-3-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes-Closed-White.png" alt="">`

    })

    eyes4.addEventListener('click', () => {
        panel1.innerHTML =`<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">

        <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">
        
        <img id="eyes-4-kitty" class="body-button" src="/Assets/Pensive-Kitty-devious-white.png" alt="">`

    })

    page2button.addEventListener('click', () => {
        
    const page1ContainerHtmlVar = 
        
    `<img src="/Assets/kitty-treat-bag.png" alt="" id="treat-thought">

    <div class="draggable panel" id="panel-1" draggable="true">  
    
    ${sessionStorage.getItem('eye-choice')}
    <img src="/Assets/happy-kitty-thought.png" alt="" id="happy-kitty-1" class="">

        <img id="eyes-1-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes.png" alt="" hidden>

        <img id="eyes-2-kitty" class="body-button" src="/Assets/Pensive-Kittey-Eyes-v2.png" alt="" hidden >

        <img id="eyes-3-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes-Closed-White.png" alt="" hidden >

        <img id="eyes-4-kitty" class="body-button" src="/Assets/Pensive-Kitty-devious-white.png" alt="" hidden >

    </div>

    <div id="panel-container">

        <div class="draggable panel" id="panel-2" draggable="true">

            <div class="mini-panel" id="mini-panel-lg">
                <img src="/Assets/sneaky-kitty-wall-sketch.png" alt="" id="wall-sneak">
            </div>
            <div class="mini-panel" id="mini-panel-bottom">
                <img src="/Assets/package-rip.png" alt="" id="rip">
            </div>
            
            <label id="text-select-label" for="text-select" class="text">Choose text:</label>
            <select name="speech" id="text-select" class="text">
                <option value="">--text--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <div class="mini-panel"><img src="/Assets/mad-kitty-sketch.png" alt="" id="mad"></div>
        </div>

        <div id="small-container">
            <div class="draggable panel" id="panel-3" draggable="true">
                <img src="/Assets/chewy.png" alt="" id="knock">
            </div>
            <div class="draggable panel" id="panel-4" draggable="true">
                <img id="zzz" src="/Assets/zzz-kitty-sketch.png" alt="">
            </div>
        </div>
    </div>

    </div>`

    const page2ContainerHtml = 

    `<img src="/Assets/kitty-treat-bag.png" alt="" id="treat-thought">

    <div class="draggable panel" id="panel-1" draggable="true">
        
        <img id="kitty-1" class="body" src="/Assets/" alt="">

        <img src="/Assets/" alt="" id="thought-bubble-1" class="speech-bubble">

        <img src="/Assets/" alt="" id="happy-kitty-1" class="">
    
        <img id="eyes-1-kitty" class="body-button" src="/Assets/" alt="" hidden>

        <img id="eyes-2-kitty" class="body-button" src="/Assets/" alt="" hidden >

        <img id="eyes-3-kitty" class="body-button" src="/Assets/" alt="" hidden >

        <img id="eyes-4-kitty" class="body-button" src="/Assets/" alt="" hidden >

    </div>

    <div id="panel-container">

        <div class="draggable panel" id="panel-2" draggable="true">

            <div class="mini-panel" id="mini-panel-lg">
                <img src="/Assets/sneaky-kitty-wall-sketch.png" alt="" id="wall-sneak">
            </div>
            <div class="mini-panel" id="mini-panel-bottom">
                <img src="/Assets/package-rip.png" alt="" id="rip">
            </div>
            
            <label id="text-select-label" for="text-select" class="text">Choose text:</label>
            <select name="speech" id="text-select" class="text">
                <option value="">--text--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <div class="mini-panel"><img src="/Assets/mad-kitty-sketch.png" alt="" id="mad"></div>
        </div>

        <div id="small-container">
            <div class="draggable panel" id="panel-3" draggable="true">
                <img src="/Assets/chewy.png" alt="" id="knock">
            </div>
            <div class="draggable panel" id="panel-4" draggable="true">
                <img id="zzz" src="/Assets/zzz-kitty-sketch.png" alt="">
            </div>
        </div>
    </div>

    </div>`

        if (sessionStorage.getItem('eye-choice')) {
        counter++

            if (counter % 2 === 0) {
                // page1.innerHTML = page1html
                pageContainer.innerHTML = page2ContainerHtml
                
                page2button.innerText = 'Page 1'
            
            return
            }
            
            pageContainer.innerHTML = page1ContainerHtmlVar
            // page1.innerHTML = page2html

            page2button.innerText = 'Page 2'
            
            return

        } else {
            alert('Must make a selection before going to page 2')
        }

    })

    resetButton.addEventListener('click', () => {
        sessionStorage.clear()

        pageContainer.innerHTML = 
        `<img src="/Assets/kitty-treat-bag.png" alt="" id="treat-thought">

        <div class="draggable panel" id="panel-1" draggable="true">
            
            <img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">

            <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">

            <img src="/Assets/happy-kitty-thought.png" alt="" id="happy-kitty-1" class="">



         
            <img id="eyes-1-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes.png" alt="" hidden>

            <img id="eyes-2-kitty" class="body-button" src="/Assets/Pensive-Kittey-Eyes-v2.png" alt="" hidden >

            <img id="eyes-3-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes-Closed-White.png" alt="" hidden >

            <img id="eyes-4-kitty" class="body-button" src="/Assets/Pensive-Kitty-devious-white.png" alt="" hidden >

            


   
           

        </div>

        <div id="panel-container">

            <div class="draggable panel" id="panel-2" draggable="true">

                <div class="mini-panel" id="mini-panel-lg">
                    <img src="/Assets/sneaky-kitty-wall-sketch.png" alt="" id="wall-sneak">
                </div>
                <div class="mini-panel" id="mini-panel-bottom">
                    <img src="/Assets/package-rip.png" alt="" id="rip">
                </div>
                
                <p id="p-text" class="text"> I am a hungry kitty 
                <label id="text-select-label" for="text-select" class="text"></label>
                <select name="speech" id="text-select" class="text">
                    <option value="">--text--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
                so hungry i am
                </p> 

                <div class="mini-panel"><img src="/Assets/mad-kitty-sketch.png" alt="" id="mad"></div>
            </div>

            <div id="small-container">
                <div class="draggable panel" id="panel-3" draggable="true">
                    <img src="/Assets/chewy.png" alt="" id="knock">
                </div>
                <div class="draggable panel" id="panel-4" draggable="true">
                    <img id="zzz" src="/Assets/zzz-kitty-sketch.png" alt="">
                </div>
            </div>`
    })

})
