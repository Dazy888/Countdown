"use strict";var startBtn=document.querySelector(".start_btn"),backBtn=document.querySelector(".back_btn"),chooseDateBl=document.querySelector(".choose_date"),dateInp=document.querySelector(".date_inp"),timerBl=document.querySelector(".timer"),days=document.querySelector(".d"),hours=document.querySelector(".h"),minutes=document.querySelector(".m"),seconds=document.querySelector(".s");function windowLoadAnimation(){startBtn.style.top=document.documentElement.clientHeight/2-startBtn.clientHeight+"px",startBtn.style.opacity=1}function showChooseDate(){startBtn.style.display="none",chooseDateBl.style.display="block",chooseDateBl.style.opacity="1",backBtn.style.display="block"}function startTimer(e){if(e.preventDefault(),""===dateInp.value)alert("Insert the date again");else{var t=function(){var e=new Date,t=0;t=n>e?n-e:31536e6-Date.parse(e)+Date.parse(n),days.innerText=Math.round(t/864e5),hours.innerText=24-e.getHours(),minutes.innerText=60-e.getMinutes(),seconds.innerText=60-e.getSeconds()};chooseDateBl.style.display="none",timerBl.style.display="block";var n=new Date(dateInp.value);t(),setInterval((function(){t()}),1e3)}}function turnBack(){"block"===chooseDateBl.style.display?(startBtn.style.display="block",chooseDateBl.style.display="none",backBtn.style.display="none"):(chooseDateBl.style.display="block",timerBl.style.display="none")}chooseDateBl.onsubmit=startTimer,window.onload=windowLoadAnimation,startBtn.onclick=showChooseDate,backBtn.onclick=turnBack;
//# sourceMappingURL=Countdown.js.map