console.log("Hi! Welcome to Francesca's Portfolio Site")
let cardsUp = false;
const process1El = document.querySelector("#process1");
const processCardsEl = document.querySelector("#process-cards");

process1El.addEventListener("click", function(){
  console.log("button pressed");
  if (cardsUp === false){
    processCardsEl.classList.add("cards-up");
    cardsUp = true;
  }
});


function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
