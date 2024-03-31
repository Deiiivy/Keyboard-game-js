// ThemeDark

const btnTheme = document.getElementById('theme')

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('active')
})


// Config Game

const textContainer = document.querySelector('.text');
const restarText = document.querySelector('.btnReset')

function textRandom(){
    const texts = [
        'Hola, ¿cómo estás?',
        'Bienvenido al juego',
        'El perro ladra',
        'La casa es grande',
        'Me gusta el chocolate',
        'Estamos aprendiendo mucho',
        'El tiempo vuela',
        'La vida es bella',
        'Mañana será otro día',
        'Todo saldrá bien'
    ];

    let textRandomIndex = Math.floor(Math.random()*texts.length)
    let textRandom = texts[textRandomIndex]

textContainer.innerHTML = textRandom
}
textRandom()




function resetGame() {
    restarText.addEventListener('click', () => {
        textRandom()
    })
}

resetGame()