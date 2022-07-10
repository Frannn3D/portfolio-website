const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");
const wireframes = Array.from(document.querySelectorAll(".wireframe"));
const dots = Array.from(document.querySelectorAll(".dot"));
let indexShown = 0;
const showD = true;

prevBtn.addEventListener("click", function () {
  previousPicture(wireframes, indexShown, true, dots);
});

nextBtn.addEventListener("click", function () {
  nextPicture(wireframes, indexShown, true, dots);
});
