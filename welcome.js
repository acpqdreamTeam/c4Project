'use strict';

const acc = document.getElementsByClassName("accordion");
function slide(){
    let i;
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            console.log('I was clicked!');
            this.classList.toggle('active'); 
            const panel = acc[i].nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
}
// =================Local Storage Code=======================
const playeroneInput = document.getElementById("PoneName") 
const playertwoInput = document.getElementById("PtwoName")
 
function storeplayerOne() {
    // stringify the drinks 
    console.log(`${playeroneInput}`);
    let stringifiedName = JSON.stringify(playeroneInput);
    console.log(stringifiedName);
    // place stringified drinks in storage
    localStorage.setItem('Player 1', `${playeroneInput}`);
  }

function storeplayerTwo(){
    console.log(`${playertwoInput}`)
    let stringifiedName = JSON.stringify(playertwoInput);
    console.log(stringifiedName);
    localStorage.setItem('Player 2', `${playertwoInput}`)
}
storeplayerOne();
storeplayerTwo();
slide();