const container = document.querySelector(".clock");
const button = document.querySelector('.apiBtn');
const result = document.querySelector('.resluts__content');
console.log(result)

function updateDate(){
  let date = new Date()
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let isAm = false


  if (minutes < 10){
    minutes = `0${date.getMinutes()}`
  }

  if (seconds < 10){
    seconds = `0${date.getSeconds()}`
  }

  if (hours > 12){
    hours = `${date.getHours() - 12}`;
    isAm = false;
  } else {
    isAm = true;
  }
 container.textContent = `${hours}:${minutes}:${seconds} ${isAm ? "AM" : "PM"}`
}


setInterval(updateDate, 1000)

function get(){
  fetch('https://api.kanye.rest').then(res => {
    return res.json()
  }).then(data => {
    result.textContent = data.quote;
  });
}

button.addEventListener('click', get)
