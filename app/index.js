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
const timeE = document.querySelector('#time')

let successKey = 0;
let incorrretKey = 0;
let second = 0;
let minute = 0;

function textRandom(){
    const texts = [
        'Un buen programador es alguien que siempre busca formas de mejorar su codigo y nunca se conforma con lo que ya sabe.',
        'La programacion es el arte de crear algo de la nada con solo la mente y un teclado.',
        'La belleza del codigo radica en su simplicidad y claridad; un buen codigo es facil de entender y de mantener.',
        'La programacion es una habilidad que se aprende con la practica constante y la voluntad de enfrentarse a nuevos desafios.',
        'Trata de entender la logica, no te grabes todo de memoria'
    ];
    

    let textRandomIndex = Math.floor(Math.random()*texts.length)
    let textRandom = texts[textRandomIndex]

    textContainer.innerHTML = ''; 

    for (let i = 0; i < textRandom.length; i++) {
        let span = document.createElement('span');
        span.textContent = textRandom[i];
        textContainer.appendChild(span);
    }

    return textRandom

}


let currentText = textRandom()

successKeyE.innerHTML = successKey
incorrretKeyE.innerHTML = incorrretKey

document.addEventListener('keydown',(e) => {
    e.preventDefault()
    console.log('event ' + e.key);
    calKey(e.key)
})

function calKey(keyUser) {
    let currentLetter = currentText[successKey];
    let currentSpan = textContainer.children[successKey];

    if (currentLetter === keyUser) {
        currentSpan.style.color = 'green'; 
        successKey++;
    } else {
        currentSpan.style.color = 'red'; 
        incorrretKey++;
    }

    successKeyE.innerHTML = successKey
    incorrretKeyE.innerHTML = incorrretKey
}

function calTime() {
    setInterval(() => {
        second++;
        if(second >= 60){
            second = 0;
            minute++;
        }
        let showTime = `0:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
        timeE.innerHTML = showTime
    },1000)
}

calTime()



function resetGame(e) {
    e.preventDefault()
    restarText.addEventListener('click', () => {
        currentText = textRandom(); 
        successKey = 0;
        incorrretKey = 0;
        successKeyE.innerHTML = successKey;
        incorrretKeyE.innerHTML = incorrretKey; 
    })
}

resetGame()
