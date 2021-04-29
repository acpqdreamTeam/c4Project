'use strict';
// ==================Accordion===========================
const accordion = document.getElementsByClassName('contentBx');
for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function() {
                console.log('I was clicked!');
                this.classList.toggle('active');
                let panel=this.nextElementSibling;
                if(panel.style.display==='block'){
                    panel.style.display='none';
                }  else{
                    panel.style.display='block';
                }
        });
    };
// =================Local Store Storage Code=======================  
function storeplayerOne() {
    const playeroneInput = document.getElementById("PoneName")
    // stringify the drinks 
    console.log(playeroneInput);
    let stringifiedName = JSON.stringify(playeroneInput);
    console.log(stringifiedName);
    // place stringified drinks in storage
    localStorage.setItem('Player 1', stringifiedName);
  }

function storeplayerTwo(){
    const playertwoInput = document.getElementById("PtwoName")
    console.log(playertwoInput)
    let stringifiedName = JSON.stringify(playertwoInput);
    console.log(stringifiedName);
    localStorage.setItem('Player 2', stringifiedName)
}
//===================Play Button================================
function startPlaying(){
    const playButton = document.getElementsByClassName('play');
    let i;
    for (let i = 0; i < playButton.length; i++) {
        playButton[i].addEventListener('click', function () {
        storeplayerOne();
        storeplayerTwo();
        });
    };
};
//=================Local Get Storage Code==========================
function getplayerOne(){
    let retrievedName = localStorage.getItem('Player 1');
    console.log(retrievedName, "is Player 1's name")
    if (retrievedName !== null) {
        let parsedOrders = JSON.parse(retrievedName);
        console.log(parsedOrders);
    }
}

function getplayerTwo(){
    let retrievedName = localStorage.getItem('Player 2');
    console.log(retrievedName, "is Player 2's name")
    if (retrievedName !== null) {
        let parsedOrders = JSON.parse(retrievedName);
        console.log(parsedOrders);
    }
}
startPlaying();