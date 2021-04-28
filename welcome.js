'use strict';

const acc = document.getElementsByClassName("accordion");
function slide(){
    let i;
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", (e) =>{
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

// function storeNames() {
//     // stringify the drinks 
//     console.log(Player.name);
//     let stringifiedNames = JSON.stringify(Coffee.drinks);
//     console.log(stringifiedNames);
//     // place stringified drinks in storage
//     localStorage.setItem('previousOrders', stringifiedOrders);
//   }

slide();