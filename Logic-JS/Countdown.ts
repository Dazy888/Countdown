// Get All Elements
const startBtn: any = document.querySelector('.start_btn')

const chooseDate: any = document.querySelector('.choose_date')
const dateInp: any = document.querySelector('.date_inp')

const backBtn: any = document.querySelector('.back_btn')

const timer: any = document.querySelector('.timer')
const days: any = document.querySelector('.d');
const hours: any = document.querySelector('.h');
const minutes: any = document.querySelector('.m');
const seconds: any = document.querySelector('.s');

// Start Btn Code
startBtn.style.top = 400 + 'px'
startBtn.style.opacity = 1;
function showChooseDate() {
    startBtn.style.display = 'none'
    chooseDate.style.display = 'block'
    chooseDate.style.opacity = '1'
    backBtn.style.display = 'block'
}
startBtn.addEventListener('click', showChooseDate)

// Choose Date Code
function showTimer(e) {
    e.preventDefault()

    if (dateInp.value === '') {
        alert('Insert the date again')
    } else {
        chooseDate.style.display = 'none'
        timer.style.display = 'block'

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
chooseDate.addEventListener('submit', showTimer)

// Back Btn Code
function turnBack() {
    if (chooseDate.style.display === 'block') {
        startBtn.style.display = 'block'
        chooseDate.style.display = 'none'
        backBtn.style.display = 'none'
    } else {
        chooseDate.style.display = 'block'
        timer.style.display = 'none'
    }
}
backBtn.addEventListener('click', turnBack)