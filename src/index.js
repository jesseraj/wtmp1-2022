
// Salainen salasana easteregiin.
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let salaKirjaimet = [];

  document.addEventListener('keydown', event => {
      const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const key = event.key.toLowerCase();

      // we are only interested in alphanumeric keys
      if (charList.indexOf(key) === -1) return;

      salaKirjaimet.push(key);

      let lause = salaKirjaimet.join("");

      if(lause.indexOf('salaisuus') > -1) {
        alert("Löysit eeppisen jutun!");
        salaKirjaimet = [];
      }
  });

});

// Tuplaklikkauskoordinaatit
ondblclick = (koordinaatit) => {
  console.log("Tuplaklikkasit koordinaateissa:", koordinaatit.clientX, koordinaatit.clientY);
};

// Hoverinapin alertti.
document.getElementById('hoverinappi').onmouseover = () => {
  alert('Koskit nappiin!');
};

// Ajastin 15 sekunnin päähän sivun avaamisesta.
const ajastin = () => {
  console.log('Hurry up!');
  clearTimeout();
};
setTimeout(ajastin, 15 * 1000);



//Testissä idletimeri

let elem = document.getElementById("timer"), timeout, startTimer = function timer() {
  elem.textContent++;
  if (elem.textContent == 15) {
    elem.textContent = 0;
    alert("Liiku jo!");
  }
  timeout = setTimeout(timer, 1000);
};

function resetTimer() {
  // here you reset the timer...
  clearTimeout(timeout);
  elem.textContent = -1;
  startTimer();
  //... and also you could start again some other action
};
console.log(timer);
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);
startTimer();



