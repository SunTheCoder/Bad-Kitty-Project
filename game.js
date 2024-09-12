window.addEventListener('DOMContentLoaded', (event) => {

    event.preventDefault()

    const tutorials = Array.from(document.querySelectorAll('.tutorial'))
    const tutorial1 = document.getElementById('tutorial-1')
    const tutorial2 = document.getElementById('tutorial-2')
    const tutorial3 = document.getElementById('tutorial-3')

    const treat = document.getElementById('treat-thought')
    const tunaCan = document.getElementById('tuna-thought')
    const friedchicken = document.getElementById('chicken-thought')
    const treats = Array.from(document.querySelectorAll('.treats'))
    
    
    const buttons = document.getElementById('buttons')
    
    const resetButton = document.getElementById('reset-button')

    const panel1 = document.getElementById('panel-1')

    const eyeButtons = Array.from(document.querySelectorAll('.body-button'))
    const eyes1 = document.getElementById('eyes-1')
    const eyes2 = document.getElementById('eyes-2')
    const eyes3 = document.getElementById('eyes-3')
    const eyes4 = document.getElementById('eyes-4')
    
    const page2button = document.getElementById('page-2-button')
    
    const pageContainer = document.getElementById('page-container')

    let counter = 1; //for page traversal

    let inactivityTime = function () {
        let time;
        const timeoutSeconds = 120; // Time in seconds (2 minutes)
    
        // Reset the timer on any user interaction
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(reloadPage, timeoutSeconds * 1000);  // Convert seconds to milliseconds
        }
    
        // Reload the page
        function reloadPage() {
            location.reload();
        }
    
        // Listen for user events that reset the timer
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
        document.ontouchstart = resetTimer; // For mobile devices
    
        // Start the timer initially
        resetTimer();
    };
    
    // Start the inactivity timer
    inactivityTime();
    


    eyeButtons.forEach(button => {button.addEventListener('click', (event) => { 

        
        const html = `<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">
        
        <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">
        
        <img id="eyes-1-kitty" class="body-button" src="${event.target.getAttribute('src')}" alt="">`
        
        panel1.innerHTML = html
        
        sessionStorage.setItem('eye-choice', html)

        
        eyeButtons.filter((treat) => treat !== event.target).forEach((eyes) => { eyes.style.display = 'none' });

        event.target.style.opacity = 0;
        event.target.style.cursor = 'default';


        tutorial1.innerText = 'Well done! Scroll to the next panel!'
        tutorial1.style.top = '15px'

        setTimeout(() => {
                    tutorial1.style.opacity = 0
                }, 5000)
        })


    })


    

    treats.forEach((treat) => {

        treat.addEventListener('click', (event) => {


            treats.filter((treat) => treat !== event.target).forEach((treat) => { treat.style.display = 'none' });

            tutorial2.innerText = 'Mmmmm! Kitty definitely likes that choice!'
            tutorial2.style.top = '15px'
            tutorial2.style.left = '420px'

            setTimeout(() => {
                tutorial2.style.opacity = 0
            }, 5000)

        });


    })

   
    

    page2button.addEventListener('click', () => {
        
    const page1ContainerHtmlVar = 
        
    `<img src="/Assets/kitty-treat-bag.png" alt="" id="treat-thought">
     <img src="/Assets/Tuna.png" alt="tuna" id="tuna-thought">
     <img src="/Assets/friedchicken.png" alt="chicken" id="chicken-thought">

    <div class="draggable panel" id="panel-1" draggable="true">  
    
    ${sessionStorage.getItem('eye-choice')}
    

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
                <img src="/Assets/questioning-kitty.png" alt="" id="knock">
            </div>
            <div class="draggable panel" id="panel-4" draggable="true">
                <img id="zzz" src="/Assets/zzz-kitty-sketch.png" alt="">
            </div>
        </div>
    </div>

    </div>`

    const page2ContainerHtml = 

    `
 
    <div class="draggable panel" id="panel-5" draggable="true">


    </div>

    <div class="draggable panel" id="panel-5" draggable="true">


    </div>

    
    <canvas id="drawingCanvas" width="650" height="300">

    <div class="draggable panel" id="panel-1" draggable="true">
        
        <img id="kitty-1" class="body" src="/Assets/" alt="">

        <img src="/Assets/" alt="" id="thought-bubble-1" class="speech-bubble">

        <img src="/Assets/" alt="" id="happy-kitty-1" class="">
    
        <img id="eyes-1-kitty" class="body-button" src="/Assets/" alt="" hidden>

        <img id="eyes-2-kitty" class="body-button" src="/Assets/" alt="" hidden >

        <img id="eyes-3-kitty" class="body-button" src="/Assets/" alt="" hidden >

        <img id="eyes-4-kitty" class="body-button" src="/Assets/" alt="" hidden >

        <div id="drawing-container">
        </div>
        
        
        </div>

        
        
    </canvas>

    <div id="tools">
    <label for="brushSize">Brush Size:</label>
    <input type="range" id="brushSize" min="1" max="20" value="5" onchange="setBrushSize(this.value)">
    
    <label for="brushColor">Brush Color:</label>
    <input type="color" id="brushColor" value="#000000" onchange="setBrushColor(this.value)">

    <button id="clearCanvas" onclick="clearCanvas()">Clear</button>

<script>
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
</script>
</div>

<div class="draggable panel" id="panel-6" draggable="true">


</div>
    

    </div>`


        //EXPAND ON CONDITION SO THAT PAGE IS DONE BEFORE PROGRESSING TO THE NEXT PAGE
        if (sessionStorage.getItem('eye-choice')) {
        counter++

            if (counter % 2 === 0) {
                // page1.innerHTML = page1html
                pageContainer.innerHTML = page2ContainerHtml

                 const clearCanvas = document.getElementById('clearCanvas')

            clearCanvas.addEventListener('click', () => {
                
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                
            })

            buttons.innerHTML = `

            <img id="eyes-1" class="body-button" src="/Assets/eye-filler.png" alt="">
            
            <img id="eyes-2" class="body-button" src="/Assets/eye-filler.png" alt="" >

            <img id="eyes-3" class="body-button" src="/Assets/eye-filler.png" alt="" >

            <img id="eyes-4" class="body-button" src="/Assets/eye-filler.png" alt="" >
            
            
            `
                    tutorials.forEach((tutorial) => {tutorial.innerText = ''})
                   

                
                page2button.innerText = 'Page 1'

// Get the canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Variables to manage drawing state
let drawing = false;

// Set initial drawing settings
ctx.lineWidth = 5;
ctx.strokeStyle = '#000000'; // default black color

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.closePath();
}

// Example tool functions to change brush size and color
function setBrushSize(size) {
    ctx.lineWidth = size;
}

function setBrushColor(color) {
    ctx.strokeStyle = color;
}

document.getElementById('brushSize').addEventListener('input', function() {
    setBrushSize(this.value);
});

document.getElementById('brushColor').addEventListener('input', function() {
    setBrushColor(this.value);
});

            
            return
            }
            
            pageContainer.innerHTML = page1ContainerHtmlVar
            // page1.innerHTML = page2html

            page2button.innerText = 'Page 2'

            buttons.innerHTML = `

            <img id="eyes-1" class="body-button" src="/Assets/Pensive-Kitty-Eyes.png" alt="">
            
            
            
            <img id="eyes-2" class="body-button" src="/Assets/Pensive-Kittey-Eyes-v2.png" alt="" >


            <img id="eyes-3" class="body-button" src="/Assets/Pensive-Kitty-Eyes-Closed-Black.png" alt="" >

            <img id="eyes-4" class="body-button" src="/Assets/Pensive-Kitty-devious-black.png" alt="" >
            
            
            `
            
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

