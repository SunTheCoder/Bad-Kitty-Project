window.addEventListener('DOMContentLoaded', (event) => {

    event.preventDefault()

    let lastVisibleTime = new Date().getTime();

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - lastVisibleTime;

            // Check if the time difference is long enough to assume the device was asleep
            if (timeDifference > 60000) {  // 60 seconds (adjust this as needed)
                // Clears all session storage data
                sessionStorage.clear();

                location.reload();  // Refresh the page
            }
        } else {
            lastVisibleTime = new Date().getTime();  // Update the time when the page becomes hidden
        }
    });

    // const qr = document.getElementById('qrCanvas');
    // const qr2 = document.getElementById('qrCanvas3');

    const happyKitty = document.getElementById('happy-kitty-1');

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

        // function handleChoice() {
        //     if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "chicken-thought") {
               
        //         return tutorial3.innerHTML = 'Kitty will <br> get <br> her <br> chicken!!'

        //     } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "treat-thought") {
                
        //         return tutorial3.innerHTML = 'Kitty will <br> get <br> her <br> treat!!'

        //     } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "tuna-thought") {
                
        //         return tutorial3.innerHTML = 'Kitty will <br> get <br> her <br> tuna!!'

        //     }
        // }

        tutorial3.innerHTML = 'Oh!! <br> Pretty <br> text!!!'
        tutorial3.style.bottom = '330px'
        tutorial3.style.left = '34px'
        

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
    
        tutorial3.innerHTML = 'Create <br> your own <br> comic <br> text. <br> →'
        tutorial3.style.opacity = 1
        tutorial3.style.bottom = '340px'
        tutorial3.style.left = '15px'

        
        // Clear the comic output
        document.getElementById('comic-output').innerText = '';
    
        // Show the input field again and reset its value
        document.getElementById('comic-text').style.opacity = '1';
        document.getElementById('comic-text').value = '';
        addText.style.opacity = '1';

    });
    

    eyeButtons.forEach(button => {button.addEventListener('click', (event) => { 

        const eyeChoice = {
            src: event.target.getAttribute('src'),
            id: event.target.getAttribute('id') + '-kitty', // Add other attributes like 'alt' if needed
            class: event.target.getAttribute('class') // Add other classes if needed

        };

        
        // const html = `<img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">
        
        // <img id="floor" class="floor" src="/Assets/floor.png" alt="floor">
        
        // <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">

        // <img src="/Assets/happy-kitty-thought.png" alt="" id="happy-kitty-1" class="">
        
        // <img id="eyes-1-kitty" class="body-button" src="${event.target.getAttribute('src')}" alt="">`
        
        
        sessionStorage.setItem('eye-choice', JSON.stringify(eyeChoice))
        
        panel1.innerHTML += `<img id=${eyeChoice.id} src=${eyeChoice.src} class=${eyeChoice.class}>`
        

        
        eyeButtons.filter((treat) => treat !== event.target).forEach((eyes) => { eyes.style.display = 'none' });

        event.target.style.opacity = 0;
        event.target.style.cursor = 'default';


        tutorial1.innerHTML = 'Oh, what could Kitty be up to?! <br\> Pretty sure it\'s something...<b>bad</b>!'
        tutorial1.style.top = '15px'

        setTimeout(() => {
                    tutorial1.style.opacity = 1
                }, 5000)
        }, { once: true })


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

            if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "chicken-thought") {
                document.getElementById('chickenbone').style.display = 'block';
                document.getElementById('chickenbox').style.display = 'block';
            } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "treat-thought") {
                document.getElementById('treatbagcounter').style.display = 'block';
                document.getElementById('treatbagopen').style.display = 'block';
            } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "tuna-thought") {
                // document.getElementById('tunacounter').style.display = 'block';
                // document.getElementById('tunaopen').style.display = 'block';
            }

            treats.filter((treat) => treat !== event.target).forEach((treat) => { treat.style.display = 'none' });

            function handleChoice() {
                happyKitty.style.opacity = 1;

                if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "chicken-thought") {
                    happyKitty.style.left = '485px';
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes chicken!`
                } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "treat-thought") {
                    happyKitty.style.left = '485px';
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes her treats!`
                } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "tuna-thought") {
                    happyKitty.style.left = '450px';
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes tuna!`
                }
                
            }

            tutorial2.innerHTML = handleChoice()
            tutorial2.style.top = '30px'
            tutorial2.style.left = '430px'

            setTimeout(() => {
                tutorial2.style.opacity = 1
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

            tutorials.forEach(tutorial => {
                tutorial.style.opacity = '0';
            });

            allButtons.forEach(button => {
                button.style.opacity = '0'
                
            })

            document.getElementById('qrContainer').style.display = 'none';

            sessionStorage.setItem('page1HTML', JSON.stringify(document.getElementById('container').innerHTML));
            console.log(JSON.parse(sessionStorage.getItem('page1HTML')));

            document.getElementById('qrContainer').style.display = 'block';


            allButtons.forEach(button => {
                button.style.opacity = '1';
                
            })

            tutorials.forEach(tutorial => {
                tutorial.style.opacity = '1';
            });

            


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
            //    qr.style.display = 'block';
           }
    // Retrieving the stored attributes
    const storedChoice = JSON.parse(sessionStorage.getItem('treat-choice'));
    const storedChoiceEye = JSON.parse(sessionStorage.getItem('eye-choice'));

    
        
    const page1ContainerHtmlVar = 
        
    `
    
    <img id=${storedChoice.id} class=${storedChoice.class} src=${storedChoice.src}>
    

    <div class="draggable panel" id="panel-1" draggable="true">  
    
    <img id="kitty-1" class="body" src="/Assets/Pensive-Kitty-blank-v2.png" alt="">
    <img id="floor" class="floor" src="/Assets/floor.png" alt="floor">


    <img src="/Assets/thought-bubble-panel-1.png" alt="" id="thought-bubble-1" class="speech-bubble">

    <img src="/Assets/happy-kitty-thought.png" alt="" id="happy-kitty-1" >

    <img id=${storedChoiceEye.id} class=${storedChoiceEye.class} src=${storedChoiceEye.src}>

        <img id="eyes-1-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes.png" alt="" hidden>

        <img id="eyes-2-kitty" class="body-button" src="/Assets/Pensive-Kittey-Eyes-v2.png" alt="" hidden >

        <img id="eyes-3-kitty" class="body-button" src="/Assets/Pensive-Kitty-Eyes-Closed-White.png" alt="" hidden >

        <img id="eyes-4-kitty" class="body-button" src="/Assets/Pensive-Kitty-devious-white.png" alt="" hidden >

    </div>

    <p id="text1" class="storyText"> There she goes. <i>Prowling</i> about. </p>
            <p id="text2" class="storyText"><b>What?  No!</b> <br>Not quite what we were expecting.</p>
            <p id="text3" class="storyText"><b>OH MY GOODNESS! COULD IT BE!?</b> <br><i>Good</i> fortune for a <i>bad</i> kitty? Of course!</p>
            <p id="text4" class="storyText"><b>It's so close, Kitty! </b><br> Get <i>through</i> the door!</p>
    <div id="panel-container">

        <div class="draggable panel" id="panel-2" draggable="true">

            <div class="mini-panel" id="mini-panel-lg">
                <img src="/Assets/sneaky-kitty-sketch.png" alt="" id="wall-sneak">
            </div>
            <div class="mini-panel" id="mini-panel-bottom">
        
                <img src="/Assets/treatpounce.png" alt="" id="rip">
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
            <img src="/Assets/kittyscratchingdoor.png" alt="" id="door-scratch">

            </div>
        </div>
    </div>

    </div>`

    const page2ContainerHtml = 

    `
 
    <div id="page2panels-container">
    
        <div class="draggable panel" id="panel-10" draggable="true">

        <img id="angry-at-door" src="./Assets/angryatdoorkitty.png" alt="kitty kicking door" />

        </div>

        <div class="draggable panel" id="panel-11" draggable="true">

        <img id="kicking-door" src="./Assets/kickingdoor.png" alt="kitty kicking door" />

        </div>

    </div>

    <div class="draggable panel" id="panel-5" draggable="true">

        <img id="kitty-walking" src="./Assets/kittywalking.png" alt="kitty walking" />


    </div>

    
    <p id="tutorial-5" class="tutorial">
    
            It's your turn to draw! <br> If you don't need the outline <br> ↓ just hit "Clear Outline" 
            
            
    
        </p>
    
    <canvas id="drawingCanvas" width="650" height="300">

    


        
        
    </canvas>

    

    <div id="tools">
    <label for="brushSize">Brush Size:</label>
    <input type="range" id="brushSize" min="1" max="20" value="5" onchange="setBrushSize(this.value)">
    
    <label for="brushColor">Brush Color:</label>
    <input type="color" id="brushColor" value="#000000" onchange="setBrushColor(this.value)">
    
    <button id="removeOutline">Clear Outline</button>

    <button id="clearCanvas" onclick="clearCanvas()">Reset Canvas</button>

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

                paws.forEach(paw => {
                    paw.style.opacity = '1';
                })

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

// Logic for removing the outline
const removeOutlineButton = document.getElementById('removeOutline');

removeOutlineButton.addEventListener('click', () => {
    // Clear the portion of the canvas where the outline was drawn
    ctx.clearRect(50, 20, 300, 280);  // Adjust the coordinates and size to match the image
    
    console.log('Outline removed!');
});

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

            document.getElementById('tutorial-1').style.opacity = 1
            document.getElementById('tutorial-1').innerHTML = 'Oh, what could Kitty be up to?! <br\> Pretty sure it\'s something...<b>bad</b>!'
            function handleTreatChoice() {

                if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "chicken-thought") {
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes chicken!`
                } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "treat-thought") {
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes her treats!`
                } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "tuna-thought") {
                    return tutorial2.innerHTML = `Mmmmm! Kitty <b>definitely</b> likes tuna!`
                }
                
            }

            tutorial2.innerHTML = handleTreatChoice()
            tutorial2.style.top = '30px'
            tutorial2.style.left = '430px'

            
            document.getElementById('happy-kitty-1').style.opacity = 1

            if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "chicken-thought") {
                document.getElementById('happy-kitty-1').style.left = '485px';
                
            } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "treat-thought") {
                document.getElementById('happy-kitty-1').style.left = '485px';
                
            } else if (JSON.parse(sessionStorage.getItem('treat-choice')).id === "tuna-thought") {
                document.getElementById('happy-kitty-1').style.left = '450px';
                
            }


            paws.forEach(paw => {
                paw.style.opacity = '1';
            })

            allButtons.forEach(button => {
                button.style.opacity = '1';
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
                    <img src="/Assets/treatpounce.png" alt="" id="rip">
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

        window.confirm('Your changes will be saved and a QR code will be generated below, so that you can take your creation with you! However, you won’t be able to change your selections. Are you finished?');
    
        paws.forEach(paw => {
            paw.style.opacity = '0';
        });
    
        // Capture page 1
        const page1HTML = JSON.parse(sessionStorage.getItem('page1HTML'));
        const page1Container = document.createElement('div');
        page1Container.innerHTML = page1HTML;
        document.body.appendChild(page1Container);
        page1Container.style.position = 'absolute';
        page1Container.style.zIndex = '-1';
    
        // Wait for images in page1Container to load
        await Promise.all(
            Array.from(page1Container.querySelectorAll('img')).map(img => {
                return new Promise((resolve, reject) => {
                    if (img.complete) {
                        resolve();  // Image already loaded
                    } else {
                        img.onload = resolve;  // Wait for image to load
                        img.onerror = reject;  // Handle loading errors
                    }
                });
            })
        );
    
        // Capture page 1 with html2canvas after all images are loaded
        let page1Canvas = await html2canvas(page1Container);
        document.body.removeChild(page1Container);
    
        // Create a new canvas and clip the bottom 50 pixels of page1Canvas
        const clippedPage1Canvas = document.createElement('canvas');
        const clipHeight1 = page1Canvas.height - 80;  // Clip the bottom 50 pixels
        clippedPage1Canvas.width = page1Canvas.width;
        clippedPage1Canvas.height = clipHeight1;
    
        const page1Ctx = clippedPage1Canvas.getContext('2d');
        page1Ctx.drawImage(page1Canvas, 0, 0, page1Canvas.width, clipHeight1, 0, 0, page1Canvas.width, clipHeight1); // Draw original with clipped height
    
        const page1Image = clippedPage1Canvas.toDataURL('image/png');
    
        // Capture page 2
        document.getElementById('tools').style.opacity = '0';
        const page2 = document.getElementById('container');
        
        // Wait for images in page2 to load
        await Promise.all(
            Array.from(page2.querySelectorAll('img')).map(img => {
                return new Promise((resolve, reject) => {
                    if (img.complete) {
                        resolve();  // Image already loaded
                    } else {
                        img.onload = resolve;  // Wait for image to load
                        img.onerror = reject;  // Handle loading errors
                    }
                });
            })
            );
            
            let page2Canvas = await html2canvas(page2);
            
            // Clip the bottom 50 pixels of page2Canvas
            const clippedPage2Canvas = document.createElement('canvas');
            const clipHeight2 = page2Canvas.height - 179;  // Clip the bottom 50 pixels
            clippedPage2Canvas.width = page2Canvas.width;
            clippedPage2Canvas.height = clipHeight2;
            
            const page2Ctx = clippedPage2Canvas.getContext('2d');
            page2Ctx.drawImage(page2Canvas, 0, 0, page2Canvas.width, clipHeight2, 0, 0, page2Canvas.width, clipHeight2); // Draw original with clipped height
            
            const page2Image = clippedPage2Canvas.toDataURL('image/png');
            
            document.getElementById('tools').style.opacity = '1';

        // Create form data to send images to the backend
        const formData = new FormData();
        formData.append('page1', page1Image);
        formData.append('page2', page2Image);
    
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    
        // Send the images to the backend to upload to S3
        fetch('https://bad-kitty-project.onrender.com/upload-images', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // data.page1Url and data.page2Url contain the URLs of the images on S3
            console.log('Page 1 Image URL:', data.page1Url);
            console.log('Page 2 Image URL:', data.page2Url);
    
            // Generate a QR code for Page 1 Image URL
            if (data.page1Url) {
                const qr = qrcode(0, 'L');
                qr.addData(data.page1Url);  // Add the S3 URL of the first image to the QR code
                qr.make();
                document.getElementById('qrDiv').innerHTML = qr.createImgTag(4);  // Adjust the size with the argument (6)
            }
    
            // Generate a QR code for Page 2 Image URL
            if (data.page2Url) {
                const qr2 = qrcode(0, 'L');
                qr2.addData(data.page2Url);
                qr2.make();
                document.getElementById('qrDiv2').innerHTML = qr2.createImgTag(4);  // Adjust the size with the argument (6)
            }
    
            sessionStorage.clear();
        })
        .catch(error => {
            console.error('Error uploading images:', error);
        });
    });
    
    

    

})

