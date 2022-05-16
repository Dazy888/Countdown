// Getting All Elements
// Buttons (Start and Back)
const startBtn: any = document.querySelector('.start_btn')
const backBtn: any = document.querySelector('.back_btn')

// Elements Of Choosing Date Block
const choosingDateBl: any = document.querySelector('.choose-date')
const dateInp: any = document.querySelector('.date_inp')

// Timer Block Elements
const timerBl: any = document.querySelector('.timer')
const days: any = document.querySelector('.d')
const hours: any = document.querySelector('.h')
const minutes: any = document.querySelector('.m')
const seconds: any = document.querySelector('.s')


// Event Listeners
// Window
function windowLoadAnimation() {
    startBtn.style.top = document.documentElement.clientHeight / 2 - startBtn.clientHeight + 'px'
    startBtn.style.opacity = 1;
}

// Show Choose Date Btn
function showChooseDate() {
    startBtn.style.display = 'none'
    choosingDateBl.style.display = 'block'
    choosingDateBl.style.opacity = '1'
    backBtn.style.display = 'block'
}

// Start Timer Btn
function startTimer(e) {
    e.preventDefault()
    if (dateInp.value === '') alert('Insert the date again')

    choosingDateBl.style.display = 'none'
    timerBl.style.display = 'block'
    const birthday: any = new Date(dateInp.value)
    function startTimer() {
        const date: any = new Date()
        let ms: number

        if (birthday > date) ms = birthday - date
        ms = 31536000000 - Date.parse(date) + Date.parse(birthday)

        days.innerText = Math.round(ms / 86400000)
        hours.innerText = 24 - date.getHours()
        minutes.innerText = 60 - date.getMinutes()
        seconds.innerText = 60 - date.getSeconds()
    }
    startTimer()

    setInterval(() => { startTimer() }, 1000)
}

// Back Btn
function turnBack() {
    if (choosingDateBl.style.display === 'block') {
        startBtn.style.display = 'block'
        choosingDateBl.style.display = 'none'
        backBtn.style.display = 'none'
    } else {
        choosingDateBl.style.display = 'block'
        timerBl.style.display = 'none'
    }
}

// Setting Event Listeners
choosingDateBl.onsubmit = startTimer
window.onload = windowLoadAnimation
startBtn.onclick = showChooseDate
backBtn.onclick = turnBack