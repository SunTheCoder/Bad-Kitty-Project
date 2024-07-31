window.addEventListener('DOMContentLoaded', () => {

    const panel1 = document.getElementById('panel-1')
    const head1 = document.getElementById('head-1')
    const head1button = document.getElementById('head-1-button')
    const head2button = document.getElementById('head-2-button')
    const head2 = document.getElementById('head-2')

    // panel1.addEventListener('click', () => {
    //     head1.style.display = 'none'
    // })

    head2button.addEventListener('click', () => {
        head2.style.display = 'block'
        head1.style.display = 'none'
    })
    head1button.addEventListener('click', () => {
        head1.style.display = 'block'
        head2.style.display = 'none'
    })

})