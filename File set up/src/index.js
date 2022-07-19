
const circle = document.querySelector('.display')
let margin = 0

function getDown() {
    margin += 300
    circle.style.marginTop = margin + 'px'
    if (margin > 300) {
        circle.removeEventListener('click', getDown)
    }
}

circle.addEventListener ('click', getDown )