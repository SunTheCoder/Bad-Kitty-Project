const head = document.getElementById('head')
const eye = document.getElementById('eye')

const draggables = document.querySelectorAll('.draggable')



eye.addEventListener('dragstart', () => {
    eye.classList.add('dragging')
})

eye.addEventListener('dragend', (event) => {
    event.preventDefault()
    eye.classList.remove('dragging')
    if (event.target === head) {
        alert('contact!')
    }
})


head.addEventListener('dragover', () => {
    const draggable = document.querySelector('.dragging')
    head.style.backgroundColor = 'blue'
})