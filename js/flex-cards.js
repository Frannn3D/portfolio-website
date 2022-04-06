// const card1El = document.querySelector("#card1");
// const card2El = document.querySelector("#card2");

const labelsArr = Array.from(document.querySelectorAll(".label"));
// let height1 = cardsArr[0].offsetHeight;
// console.log(height1);

let touched = false;

function cardsMovements(label) {
  // Find the card number
  const number = label.querySelector(".process-number").textContent;
  console.log(number);
  let activeCard = document.querySelector(`#card${number}`);
  console.log(activeCard);

  // find the previous active card and set it as closed
  let oldActive = document.querySelector(".active");
  console.log(oldActive);

  /////// check it isn't the same card as before
  if (oldActive !== activeCard) {
    oldActive.classList.remove("active");
    oldActive.classList.add("closed");

    // set the new active card as active
    activeCard.classList.remove("closed");
    activeCard.classList.add("active");
  } else {
    // if the card is the same as the old one (third click on the same card)
    //remove closed
    activeCard.classList.toggle("closed");
  }
}

labelsArr.forEach((label) => {
  label.addEventListener("click", function (e) {
    cardsMovements(label);
  });
});

labelsArr.forEach((label) => {
  label.addEventListener("touchstart", function (e) {
    e.preventDefault(); // without it, the desktop version will detect multiple clicks / touchstart, closing immediately after the card
    if (!touched) {
      touched = true;
      cardsMovements(label);
      setTimeout(function () {
        touched = false;
      }, 400);
    }
  });
});

// cardsArr.forEach((card) => {
//   card.addEventListener("touchstart", function () {
//     if (!touched) {
//       touched = true;
//       setTimeout(function () {
//         touched = false;
//       }, 100);
//       card.classList.toggle("closed");
//       let activeCard = cardsArr.find((card) =>
//         card.classList.contains("active")
//       );
//       console.log(activeCard);
//       activeCard.classList.remove("active");
//       activeCard.classList.add("closed");
//       card.classList.add("active");
//     }
//     return false;
//   });
// });
