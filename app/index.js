// ThemeDark

const btnTheme = document.getElementById('theme')

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('active')
})


// Config Game

const textContainer = document.querySelector('.text');
const restarText = document.querySelector('.btnReset')
const successKeyE = document.querySelector('#succesKey')
const incorrretKeyE = document.querySelector('#incorretKey')

let successKey = 0;
let incorrretKey = 0;

function textRandom(){
    const texts = [
        'Hola, ¿cómo estas?',
        'Bienvenido al juego',
        'El perro ladra',
        'La casa es grande',
        'Me gusta el chocolate',
        'Estamos aprendiendo mucho',
        'El tiempo vuela',
        'La vida es bella',
        'Mañana será otro dia',
        'Todo saldra bien'
    ];

    let textRandomIndex = Math.floor(Math.random()*texts.length)
    let textRandom = texts[textRandomIndex]

textContainer.innerHTML = textRandom

return textRandom

}


let currentText = textRandom()

successKeyE.innerHTML = successKey
incorrretKeyE.innerHTML = incorrretKey

document.addEventListener('keydown',(e) => {
    console.log('event ' + e.key);
    calKey(e.key)
})

function calKey(keyUser) {
    if (currentText[successKey] === keyUser) {
        successKey++;
    } else {
        incorrretKey++;
    }
    successKeyE.innerHTML = successKey
incorrretKeyE.innerHTML = incorrretKey

    
}


function resetGame() {
    restarText.addEventListener('click', () => {
        currentText = textRandom(); 
        successKey = 0;
        incorrretKey = 0;
        successKeyE.innerHTML = successKey;
        incorrretKeyE.innerHTML = incorrretKey; 
    })
}

resetGame()

