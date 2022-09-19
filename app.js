
document.getElementById("demo").style.cursor = "help";

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
//searching for an element with the id='time-left'
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId

function randomSquare(){
    //remove the 'mole' from all the squares if exists
    squares.forEach(square => square.classList.remove('mole'))


    let randomSquare = squares[Math.floor(9 * Math.random())]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => square.addEventListener('mousedown' ,() => {
    if(square.id === hitPosition){
        result++;
        score.textContent = result;
        hitPosition = null
    }
}))
function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

let str = document.querySelector('.start')
str.addEventListener('click', event => {
    moveMole()
    countDownTimerId = setInterval(countDown, 1000)
    function countDown(){
        currentTime --
        timeLeft.innerHTML = currentTime

        if( currentTime === 0){
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert('GAME OVER! Your final score is ' + result)
            currentTime = 61
            result = 0
        }
    }
})

let stp = document.querySelector('.stop')
stp.addEventListener('click', event => {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME STOPPED! Your score is  ' + result)
    currentTime = 61
    result = 0
})




