// Getting All Elements
// Buttons (Start Choosing Date and Turn Back)
var dateChoosingBtn = document.querySelector('.date_choosing_btn');
var turnBackBtn = document.querySelector('.turn_back_btn');
// Elements Of Choosing Date Block
var choosingDateBl = document.querySelector('.date-choosing');
var dateInp = document.querySelector('.date-choosing__inp');
// Timer Block Elements
var timerBl = document.querySelector('.timer');
var days = document.querySelector('.d');
var hours = document.querySelector('.h');
var minutes = document.querySelector('.m');
var seconds = document.querySelector('.s');
// Event Listeners
// Window Load Animation
function animation() {
    dateChoosingBtn.style.top = document.documentElement.clientHeight / 2 - dateChoosingBtn.clientHeight + 'px';
    dateChoosingBtn.style.opacity = 1;
}
window.onload = animation;
// Start Date Choosing Button
function startDateChoosing() {
    dateChoosingBtn.style.display = 'none';
    choosingDateBl.style.display = 'block';
    choosingDateBl.style.opacity = '1';
    turnBackBtn.style.display = 'block';
}
dateChoosingBtn.onclick = startDateChoosing;
// Start Timer Button
function startTimer(e) {
    e.preventDefault();
    if (dateInp.value === '')
        alert('Insert the date again');
    choosingDateBl.style.display = 'none';
    timerBl.style.display = 'block';
    var birthday = new Date(dateInp.value);
    function startTimer() {
        var date = new Date();
        var ms = 0;
        birthday > date ? ms = birthday - date : ms = 31536000000 - Date.parse(date) + Date.parse(birthday);
        days.innerText = Math.round(ms / 86400000);
        hours.innerText = 24 - date.getHours();
        minutes.innerText = 60 - date.getMinutes();
        seconds.innerText = 60 - date.getSeconds();
    }
    startTimer();
    setInterval(function () {
        startTimer();
    }, 1000);
}
choosingDateBl.onsubmit = startTimer;
// Turn Back Button
function turnBack() {
    if (choosingDateBl.style.display === 'block') {
        dateChoosingBtn.style.display = 'block';
        choosingDateBl.style.display = 'none';
        turnBackBtn.style.display = 'none';
    }
    else {
        choosingDateBl.style.display = 'block';
        timerBl.style.display = 'none';
    }
}
turnBackBtn.onclick = turnBack;
