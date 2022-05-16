// Getting All Elements
// Buttons (Start Choosing Date and Turn Back)
const dateChoosingBtn: any = document.querySelector('.date_choosing_btn')
const turnBackBtn: any = document.querySelector('.turn_back_btn')

// Elements Of Choosing Date Block
const choosingDateBl: any = document.querySelector('.date-choosing')
const dateInp: any = document.querySelector('.date_inp')

// Timer Block Elements
const timerBl: any = document.querySelector('.timer')
const days: any = document.querySelector('.d')
const hours: any = document.querySelector('.h')
const minutes: any = document.querySelector('.m')
const seconds: any = document.querySelector('.s')


// Event Listeners
// Window Load Animation
function animation() {
    dateChoosingBtn.style.top = document.documentElement.clientHeight / 2 - dateChoosingBtn.clientHeight + 'px'
    dateChoosingBtn.style.opacity = 1;
}
window.onload = animation

// Start Date Choosing Button
function startDateChoosing() {
    dateChoosingBtn.style.display = 'none'
    choosingDateBl.style.display = 'block'
    choosingDateBl.style.opacity = '1'
    turnBackBtn.style.display = 'block'
}
dateChoosingBtn.onclick = startDateChoosing

// Start Timer Button
function startTimer(e) {
    e.preventDefault()
    const birthday: any = new Date(dateInp.value)

    if (dateInp.value === '') alert('Insert the date again')

    choosingDateBl.style.display = 'none'
    timerBl.style.display = 'block'

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
choosingDateBl.onsubmit = startTimer

// Turn Back Button
function turnBack() {
    if (choosingDateBl.style.display === 'block') {
        dateChoosingBtn.style.display = 'block'
        choosingDateBl.style.display = 'none'
        turnBackBtn.style.display = 'none'
    } else {
        choosingDateBl.style.display = 'block'
        timerBl.style.display = 'none'
    }
}
turnBackBtn.onclick = turnBack