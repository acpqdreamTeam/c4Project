'use strict';

const acc = document.getElementsByClassName("accordion");
const pan = document.getElementsByClassName("panel");

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