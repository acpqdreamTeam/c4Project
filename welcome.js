'use strict';
// ==================Accordion===========================
const accordion = document.getElementsByClassName('contentBx');
for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function() {
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
    const playeroneInput = document.getElementById("PoneName").value;
    // stringify the names 
    let stringifiedName = JSON.stringify(playeroneInput);
    // place stringified names in storage
    localStorage.setItem('Player 1', stringifiedName);
}

function storeplayerTwo(){
    const playertwoInput = document.getElementById("PtwoName").value;
    console.log(playertwoInput)
    let stringifiedName = JSON.stringify(playertwoInput);
    console.log(stringifiedName);
    localStorage.setItem('Player 2', stringifiedName);
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



startPlaying();