// console.log("Hi! Welcome to Francesca's Portfolio Site");
// let cardsUp = false;
// const process1El = document.querySelector("#process1");
// const processCardsEl = document.querySelector(".process-cards");
// const cardsEl = Array.from(document.querySelectorAll(".card"));

// for (let i = 0; i < cardsEl.length; i++) {
//   cardsEl[i].addEventListener("click", function(e){
//     console.log("button pressed");
//     if (cardsUp === false){
//       processCardsEl.classList.add("active");
//       cardsUp = true;
//     }
//     console.log(e);
//     const cardPressed = e.path.find(item => item === "div#process");
//     console.log(cardPressed);
//   })
// }

// process1El.addEventListener("click", function(){
// });

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}
