'use strict';

const acc = document.getElementsByClassName("accordion");
const pan = document.getElementsByClassName("panel");
const playerNames= 
// Cut from index.html to prevent merge conflict
<a href="welcome.html">Welcome Page</a>
//==============================================
function handleClick(event) {
    const clickedTarget=event.target;
    const id = clickedTarget.id;
     for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

console.log("Hello!");
acc.addEventListener('click', handleClick);

// =================Local Storage Code=======================

function storeNames() {
    // stringify the drinks 
    console.log(Player.name);
    let stringifiedNames = JSON.stringify(Coffee.drinks);
    console.log(stringifiedNames);
    // place stringified drinks in storage
    localStorage.setItem('previousOrders', stringifiedOrders);
  }