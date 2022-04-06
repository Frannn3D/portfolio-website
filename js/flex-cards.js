// const card1El = document.querySelector("#card1");
// const card2El = document.querySelector("#card2");

// card2El.addEventListener("click", function () {
//   card2El.classList.toggle("closed");
//   card1El.classList.toggle("closed");
// });

const cardsArr = Array.from(document.querySelectorAll(".process-card"));
// let height1 = cardsArr[0].offsetHeight;
console.log(height1);

// for of.. height> height2? height = height2 : height

// let i = 1;
// for (height of cardsArr) {
//   if (i === cardsArr.length) continue;
//   // console.log(cardsArr[i].offsetHeight);
//   let height2 = cardsArr[i].offsetHeight;
//   height1 = height1 > height2 ? height1 : height2;
//   console.log(height1);
//   i++;
// }

let touched = false;

cardsArr.forEach((card) => {
  card.addEventListener("click", function () {
    // do something
    card.classList.toggle("closed");
    let activeCard = cardsArr.find((card) => card.classList.contains("active"));
    console.log(activeCard);
    activeCard.classList.remove("active");
    activeCard.classList.add("closed");
    card.classList.add("active");
  });
});

cardsArr.forEach((card) => {
  card.addEventListener("touchstart", function (e) {
    e.preventDefault(); // without it, the desktop version will detect multiple clicks / touchstart, closing immediately after the card
    if (!touched) {
      touched = true;
      card.classList.toggle("closed");
      let activeCard = cardsArr.find((card) =>
        card.classList.contains("active")
      );
      console.log(activeCard);
      activeCard.classList.remove("active");
      activeCard.classList.add("closed");
      card.classList.add("active");
      setTimeout(function () {
        touched = false;
      }, 500);
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
