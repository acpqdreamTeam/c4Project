// //////////////////Global Variables///////////////
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');
const arrow6 = document.getElementById('arrow6');
const arrow7 = document.getElementById('arrow7');


/////////////Functions For ClickedArrows///////////
function handleClickArrow1(event) {
 alert('hey Im arrow 1');
}

function handleClickArrow2(event) {
 alert('hey Im arrow 2')
}

function handleClickArrow3(event) {
 alert('hey Im arrow 3')
}

function handleClickArrow4(event) {
 alert('hey Im arrow 4')
}

function handleClickArrow5(event) {
  alert('hey Im arrow 5')
}

function handleClickArrow6(event) {
 alert('hey Im arrow 6')
}

function handleClickArrow7(event) {
 alert('hey Im arrow 7')
}

// ////////////////Event Listeners for ClickedArrows///////////////////
arrow1.addEventListener('click', handleClickArrow1);
arrow2.addEventListener('click', handleClickArrow2);
arrow3.addEventListener('click', handleClickArrow3);
arrow4.addEventListener('click', handleClickArrow4);
arrow5.addEventListener('click', handleClickArrow5);
arrow6.addEventListener('click', handleClickArrow6 );
arrow7.addEventListener('click', handleClickArrow7);