"use strict";var startBtn=document.querySelector(".start_btn"),chooseDate=document.querySelector(".choose_date"),dateInp=document.querySelector(".date_inp"),backBtn=document.querySelector(".back_btn"),timer=document.querySelector(".timer"),days=document.querySelector(".d"),hours=document.querySelector(".h"),minutes=document.querySelector(".m"),seconds=document.querySelector(".s");function showChooseDate(){startBtn.style.display="none",chooseDate.style.display="block",chooseDate.style.opacity="1",backBtn.style.display="block"}function showTimer(e){if(e.preventDefault(),""===dateInp.value)alert("Insert the date again");else{var t=function(){var e=new Date,t=0;t=n>e?n-e:31536e6-Date.parse(e)+Date.parse(n),days.innerText=Math.round(t/864e5),hours.innerText=24-e.getHours(),minutes.innerText=60-e.getMinutes(),seconds.innerText=60-e.getSeconds()};chooseDate.style.display="none",timer.style.display="block";var n=new Date(dateInp.value);t(),setInterval((function(){t()}),1e3)}}function turnBack(){"block"===chooseDate.style.display?(startBtn.style.display="block",chooseDate.style.display="none",backBtn.style.display="none"):(chooseDate.style.display="block",timer.style.display="none")}startBtn.style.top="400px",startBtn.style.opacity=1,startBtn.addEventListener("click",showChooseDate),chooseDate.addEventListener("submit",showTimer),backBtn.addEventListener("click",turnBack);
//# sourceMappingURL=Countdown.js.map