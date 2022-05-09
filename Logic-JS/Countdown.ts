// Geting All Elements

// Buttons (Start and Back)
const startBtn: any = document.querySelector('.start_btn')
const backBtn: any = document.querySelector('.back_btn')

// Choose Date Elements
const chooseDateBl: any = document.querySelector('.choose_date')
const dateInp: any = document.querySelector('.date_inp')

// Timer Block Elements
const timerBl: any = document.querySelector('.timer')
const days: any = document.querySelector('.d');
const hours: any = document.querySelector('.h');
const minutes: any = document.querySelector('.m');
const seconds: any = document.querySelector('.s');

// Event Listeners

// Window
function windowLoadAnimation() {
    startBtn.style.top = document.documentElement.clientHeight / 2 - startBtn.clientHeight + 'px'
    startBtn.style.opacity = 1;
}

// Show Choose Date Btn
function showChooseDate() {
    startBtn.style.display = 'none'
    chooseDateBl.style.display = 'block'
    chooseDateBl.style.opacity = '1'
    backBtn.style.display = 'block'
}

// Start Timer Btn
function startTimer(e) {
    e.preventDefault()

    if (dateInp.value === '') {
        alert('Insert the date again')
    } else {
        chooseDateBl.style.display = 'none'
        timerBl.style.display = 'block'

        let birthday: any = new Date(dateInp.value);
        function startTimer() {
            let date: any = new Date();
            let ms = 0;

            if (birthday > date) {
                ms = birthday - date;
            } else {
                ms = 31536000000 - Date.parse(date) + Date.parse(birthday);
            }

            days.innerText = Math.round(ms / 86400000)
            hours.innerText = 24 - date.getHours()
            minutes.innerText = 60 - date.getMinutes()
            seconds.innerText = 60 - date.getSeconds()
        }
        startTimer();

        setInterval(() => {
            startTimer();
        }, 1000);
    }
}

// Back Btn
function turnBack() {
    if (chooseDateBl.style.display === 'block') {
        startBtn.style.display = 'block'
        chooseDateBl.style.display = 'none'
        backBtn.style.display = 'none'
    } else {
        chooseDateBl.style.display = 'block'
        timerBl.style.display = 'none'
    }
}

// Setting Event Listeners

// Submit
chooseDateBl.onsubmit = startTimer

// Load
window.onload = windowLoadAnimation

// Click
startBtn.onclick = showChooseDate
backBtn.onclick = turnBack