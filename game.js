window.addEventListener('DOMContentLoaded', (event) => {

    event.preventDefault()

    let lastVisibleTime = new Date().getTime();

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - lastVisibleTime;

            // Check if the time difference is long enough to assume the device was asleep
            if (timeDifference > 60000) {  // 60 seconds (adjust this as needed)
                location.reload();  // Refresh the page
            }
        } else {
            lastVisibleTime = new Date().getTime();  // Update the time when the page becomes hidden
        }
    });

    const qr = document.getElementById('qrCanvas');

    const addText = document.getElementById('add-text')
    const comicText = document.getElementById('comic-text')

    const tutorials = Array.from(document.querySelectorAll('.tutorial'))
    const tutorial1 = document.getElementById('tutorial-1')
    const tutorial2 = document.getElementById('tutorial-2')
    const tutorial3 = document.getElementById('tutorial-3')

    const treat = document.getElementById('treat-thought')
    const tunaCan = document.getElementById('tuna-thought')
    const friedchicken = document.getElementById('chicken-thought')
    const treats = Array.from(document.querySelectorAll('.treats'))
    const paws = Array.from(document.querySelectorAll('.paws'))
    
    const allButtons = document.querySelectorAll('button'); 
    const buttons = document.getElementById('buttons')
    
    const resetButton = document.getElementById('reset-button')
    const saveButton = document.getElementById('save-button')

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
    
    //text area
    let addTextCounter = 0
    addText.addEventListener('click', (event) => {
        event.preventDefault()
        
        if (document.getElementById('comic-text').value.length <= 5) {

        sessionStorage.setItem('comic-word-choice', document.getElementById('comic-text').value);
        console.log('Comic word choice:', sessionStorage.getItem('comic-word-choice'));

        tutorial3.innerHTML = 'Ooooh. <br> Pretty text! <br> Nice!!'
        tutorial3.style.bottom = '360px'
        

            setTimeout(() => {
                tutorial3.style.opacity = 0
            }, 2000)
        
        addTextCounter++;

        const userInput = document.getElementById('comic-text').value;
        const comicOutput = document.getElementById('comic-output');
        
        // Apply the comic style
        comicOutput.innerText = userInput;
        
        // Optionally clear the input field after adding the text
        document.getElementById('comic-text').value = '';
        document.getElementById('comic-text').style.opacity = '0';
        addText.style.opacity = '0';
        } else {
            alert('You can only add up to 5 characters to the comic.')
        }
    });
    
    document.getElementById('reset-text').addEventListener('click', () => {
        // Reset the counter
        addTextCounter = 0;
    
        tutorial3.innerHTML = 'Create <br> your own <br> comic text. <br> ↓↓'
        tutorial3.style.opacity = 1
        tutorial3.style.bottom = '375px'
        
        // Clear the comic output
        document.getElementById('comic-output').innerText = '';
    
        // Show the input field again and reset its value
        document.getElementById('comic-text').style.opacity = '1';
        document.getElementById('comic-text').value = '';
        addText.style.opacity = '1';

    });
    

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


            // Storing multiple attributes
            const treatChoice = {
                src: event.target.getAttribute('src'),
                id: event.target.getAttribute('id'), // Add other attributes like 'alt' if needed
                class: event.target.getAttribute('class') // Add other classes if needed

            };

            console.log(treatChoice);

            sessionStorage.setItem('treat-choice', JSON.stringify(treatChoice));

            treats.filter((treat) => treat !== event.target).forEach((treat) => { treat.style.display = 'none' });

            tutorial2.innerText = 'Mmmmm! Kitty definitely likes that choice!'
            tutorial2.style.top = '15px'
            tutorial2.style.left = '420px'

            setTimeout(() => {
                tutorial2.style.opacity = 0
            }, 5000)

            event.target.style.cursor = 'default';

        });


    })

    
   
    
    page2button.addEventListener('click', () => {

        
        if (sessionStorage.getItem('eye-choice') && sessionStorage.getItem('treat-choice') && sessionStorage.getItem('comic-word-choice')){
            counter++

            paws.forEach(paw => {
                paw.style.opacity = '0';
            })

            allButtons.forEach(button => {
                button.style.opacity = '0'
                
            })

            sessionStorage.setItem('page1HTML', JSON.stringify(document.getElementById('container').innerHTML));
            console.log(JSON.parse(sessionStorage.getItem('page1HTML')));

            allButtons.forEach(button => {
                button.style.opacity = '1';
                
            })

            // Check if the dialog has been shown before
            if (!sessionStorage.getItem('page2DialogShown')) {
               // Show the confirmation dialog
               const userConfirmed = window.confirm('Your changes will be saved, and you won’t be able to change your selections. Are you sure you want to move to Page 2?');
       
               // If the user confirms, proceed to page 2
               if (!userConfirmed) {
                   // User clicked 'No', don't proceed
                   return;
               }
       
               // Set a flag in sessionStorage to prevent showing the dialog again
               sessionStorage.setItem('page2DialogShown', 'true');
               saveButton.style.display = 'block';
               qr.style.display = 'block';
           }
    // Retrieving the stored attributes
    const storedChoice = JSON.parse(sessionStorage.getItem('treat-choice'));
        
    const page1ContainerHtmlVar = 
        
    `<img id=${storedChoice.id} class=${storedChoice.class} src=${storedChoice.src}>
    

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
                <img src="/Assets/sneaky-kitty-sketch.png" alt="" id="wall-sneak">
            </div>
            <div class="mini-panel" id="mini-panel-bottom">
        
                <img src="/Assets/package-rip.png" alt="" id="rip">
            </div>
            
            <textarea id="comic-text" style="opacity: 0" placeholder="Type your comic text here"></textarea>
                        <button id="add-text" style="opacity: 0" type="button">Add Text</button>
                        <button id="reset-text"style="opacity: 0" >Reset Text</button>
                        <div id="comic-output">${sessionStorage.getItem('comic-word-choice')}</div>

            <div class="mini-panel"><img src="/Assets/mad-kitty-sketch.png" alt="" id="mad"></div>
        </div>

        <div id="small-container">
            <div class="draggable panel" id="panel-3" draggable="true">
                <img src="/Assets/questioning-kitty.png" alt="" id="knock">
            </div>
            <div class="draggable panel" id="panel-4" draggable="true">
                <img id="zzz" src="" alt="">
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

<div id="panel-6" class="draggable panel" >

    <img src="/Assets/zzz-treats.png" alt="satisfied kitty" id="kitty-satisfied">

</div>
    


    </div>`


        //EXPAND ON CONDITION SO THAT PAGE IS DONE BEFORE PROGRESSING TO THE NEXT PAGE
      

            if (counter % 2 === 0) {
                // page1.innerHTML = page1html
                pageContainer.innerHTML = page2ContainerHtml

                 const clearCanvas = document.getElementById('clearCanvas')

            clearCanvas.addEventListener('click', () => {
                
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Create a new image object on reset
                    const img = new Image();

                    // Set the source of the image
                    img.src = "./Assets/Kitty-outline.png";
                    img.id = "kitty-outline" // Replace with your image URL or path

                    // Once the image is loaded, draw it on the canvas
                    img.onload = function() {
                        // Draw the image at x: 50, y: 50, and scale it to 300x200 pixels
                        ctx.drawImage(img, 50, 20, 300, 280);
                    };
                
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

// Create a new image object
const img = new Image();

// Set the source of the image
img.src = "./Assets/Kitty-outline.png";
img.id = "kitty-outline" // Replace with your image URL or path

// Once the image is loaded, draw it on the canvas
img.onload = function() {
    // Draw the image at x: 50, y: 50, and scale it to 300x200 pixels
    ctx.drawImage(img, 50, 20, 300, 280);
};

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
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

function startDrawing(e) {
    drawing = true;
    event.preventDefault();
                    const pos = getEventPos(event);
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(event) {
    if (!drawing) return;
    event.preventDefault();
    const pos = getEventPos(event);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.closePath();
}

// Get correct coordinates for touch or mouse events
function getEventPos(event) {
    const rect = canvas.getBoundingClientRect();
    if (event.touches) {
        return {
            x: event.touches[0].clientX - rect.left,
            y: event.touches[0].clientY - rect.top
        };
    } else {
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
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
            paws.forEach(paw => {
                paw.style.opacity = '1';
            })

            allButtons.forEach(button => {
                button.style.display = 'block';
            })

            page2button.innerText = 'Page 2'

            buttons.innerHTML = `

            <img id="eyes-1" class="body-button" src="/Assets/eye-filler.png" alt="">
            
            <img id="eyes-2" class="body-button" src="/Assets/eye-filler.png" alt="" >

            <img id="eyes-3" class="body-button" src="/Assets/eye-filler.png" alt="" >

            <img id="eyes-4" class="body-button" src="/Assets/eye-filler.png" alt="" >
            
            
            `
            
            return

        } else {
            console.log('Selections not made'); // Add this to verify if the condition fails
            alert('Must make all selections before going to page 2');
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
                
                <textarea id="comic-text" placeholder="Type your comic text here"></textarea>
                        <button id="add-text" type="button">Add Text</button>
                        <button id="reset-text">Reset Text</button>
                        <div id="comic-output"></div>

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


    saveButton.addEventListener('click', async () => {
        paws.forEach(paw => {
            paw.style.opacity = '0';
        });
    
        // Retrieve the HTML string from sessionStorage
        const page1HTML = JSON.parse(sessionStorage.getItem('page1HTML'));
    
        // Create a new div and insert the saved HTML into it
        const page1Container = document.createElement('div');
        page1Container.innerHTML = page1HTML;
        document.body.appendChild(page1Container);  // Append to the body (or any other container)
    
        // Add CSS styles to make sure the container is rendered correctly before capturing
        page1Container.style.position = 'absolute';  // Ensure the div is visible on screen
        page1Container.style.zIndex = '-1';  // Hide it visually but keep it in the DOM
    
        // Get the actual height of the element
        const page1Height = page1Container.offsetHeight;
    
        // Now capture the newly created container, reducing the height by 50px
        const page1Canvas = await html2canvas(page1Container, {
            width: page1Container.offsetWidth,
            height: page1Height - 40 // Subtract 50 pixels from the total height
        });
    
        const page1Image = page1Canvas.toDataURL('image/png');
    
        // Remove the temporary container after capturing it
        document.body.removeChild(page1Container);
    
        // Create and trigger a download link for the image
        const link1 = document.createElement('a');
        link1.href = page1Image;
        link1.download = 'page1.png';
        link1.click();
    
        // Capture page 2
        const page2 = document.getElementById('page-1');
        const page2Canvas = await html2canvas(page2);
        const page2Image = page2Canvas.toDataURL('image/png');
    
        // Save images (you can save them programmatically, or show them to the user)
        const link2 = document.createElement('a');
        link2.href = page2Image;
        link2.download = 'page2.png';
        link2.click();
    
        // QR code generation (if needed)
        // const qr = qrcode(0, 'L');
        // qr.addData('Here could be a URL to download images or info');
        // qr.make();
        // document.getElementById('qrCanvas').innerHTML = qr.createImgTag(6); // Size of QR code
    });

})

