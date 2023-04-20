// Get the modal
var modal1 = document.getElementById("modal-div1");
var modal2 = document.getElementById("modal-div2");
var modal3 = document.getElementById("modal-div3");

// Get the button that opens the modal
var leftBtn = document.querySelector(".left-btn");
var rightBtn = document.querySelector(".right-btn");
var btmBtn = document.querySelector(".btm-btn");

// Get the <span> element that closes the modal
var close = document.querySelector('.close-btn')

// When the user clicks the button, open the modal 
leftBtn.onclick = function() {
    modal1.style.display = "block";
}
rightBtn.onclick = function() {
    modal2.style.display = "block";
}
btmBtn.onclick = function() {
    modal3.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  console.log('the button was clicked')
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }

}



// const text = document.getElementById("text");

// text.innerHTML = "Text";

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

// Loop through list of buttons and add an event listener that checks for clicks. If i = 0 run gotoPrev function otherwise run gotoNext.
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
        i == 0 ? gotoPrev() : gotoNext()
    );
}

const gotoPrev = () =>
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () =>
    current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
};
