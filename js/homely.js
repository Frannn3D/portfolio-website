<<<<<<< Updated upstream
const prevWireframeBtn = document.querySelector(".btn-previous-wireframe");
const nextWireframeBtn = document.querySelector(".btn-next-wireframe");
const wireframes = Array.from(document.querySelectorAll(".wireframe"));

const processBtns = Array.from(document.querySelectorAll(".process-btn"));
const processResearch = document.querySelector(".process-content .research");
// prettier-ignore
const processWireframes = document.querySelector(".process-content .wireframes");
// prettier-ignore
const processHifiScreens = document.querySelector(".process-content .highFidelity");
const processAppIcon = document.querySelector(".process-content .appIcon");

let wireframeShown = document.querySelector(".wireframe");
let activeProcessBtn;
let indexShown;
indexShown = wireframes.findIndex((item) => item === wireframeShown);
let touched = false;

// Add interactions to the Design Process navigation buttons

function navDesignProcess(processBtn) {
  // Find the current active button
  activeProcessBtn = document.querySelector(".process-btn.active");
  const idShownProcess = activeProcessBtn.id.split("-")[1];
  // prettier-ignore
  const shownProcess = document.querySelector(`.process-content .${idShownProcess}`);
  shownProcess.classList.add("hidden");

  // get the class for the process that needs to be shown
  const id = processBtn.id;
  const idArray = id.split("-");
  const processClass = idArray[1];
  // prettier-ignore
  const processToShow = document.querySelector(`.process-content .${processClass}`);
  processToShow.classList.remove("hidden");

  // switch (processBtn.id) {
  //   case "btn-research":
  //     processResearch.classList.remove("hidden");
  //     break;
  //   // case "btn-wireframes":
  // }

  /////// check it isn't the same button as before
  if (activeProcessBtn !== processBtn) {
    activeProcessBtn.classList.remove("active");

    // set the new button as active
    processBtn.classList.add("active");
  }
}

processBtns.forEach((processBtn) => {
  processBtn.addEventListener("click", function (e) {
    navDesignProcess(processBtn);
  });
});

//  Wireframe sub-section - code of the arrow buttons
// Show next wireframe
nextWireframeBtn.addEventListener("click", function () {
  if (indexShown >= 2) {
    wireframes[indexShown].classList.add("hidden");
    indexShown = 0;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  } else {
    console.log(indexShown);
    wireframes[indexShown].classList.add("hidden");
    indexShown += 1;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  }
});

// Show previous wireframe
prevWireframeBtn.addEventListener("click", function () {
  if (indexShown <= 0) {
    wireframes[indexShown].classList.add("hidden");
    indexShown = 2;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  } else {
    console.log(indexShown);
    wireframes[indexShown].classList.add("hidden");
    indexShown -= 1;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  }
});
=======
const prevWireframeBtn = document.querySelector(".btn-previous-wireframe");
const nextWireframeBtn = document.querySelector(".btn-next-wireframe");
const wireframes = Array.from(document.querySelectorAll(".wireframe"));

const processBtns = Array.from(document.querySelectorAll(".process-btn"));
const processResearch = document.querySelector(".process-content .research");
// prettier-ignore
const processWireframes = document.querySelector(".process-content .wireframes");
// prettier-ignore
const processHifiScreens = document.querySelector(".process-content .highFidelity");
const processAppIcon = document.querySelector(".process-content .appIcon");

let wireframeShown = document.querySelector(".wireframe");
let activeProcessBtn;
let indexShown;
indexShown = wireframes.findIndex((item) => item === wireframeShown);
let touched = false;

// Add interactions to the Design Process navigation buttons

function navDesignProcess(processBtn) {
  // Find the current active button
  activeProcessBtn = document.querySelector(".process-btn.active");
  const idShownProcess = activeProcessBtn.id.split("-")[1];
  // prettier-ignore
  const shownProcess = document.querySelector(`.process-content .${idShownProcess}`);
  shownProcess.classList.add("hidden");

  // get the class for the process that needs to be shown
  const id = processBtn.id;
  const idArray = id.split("-");
  const processClass = idArray[1];
  // prettier-ignore
  const processToShow = document.querySelector(`.process-content .${processClass}`);
  processToShow.classList.remove("hidden");

  // switch (processBtn.id) {
  //   case "btn-research":
  //     processResearch.classList.remove("hidden");
  //     break;
  //   // case "btn-wireframes":
  // }

  /////// check it isn't the same button as before
  if (activeProcessBtn !== processBtn) {
    activeProcessBtn.classList.remove("active");

    // set the new button as active
    processBtn.classList.add("active");
  }
}

processBtns.forEach((processBtn) => {
  processBtn.addEventListener("click", function (e) {
    navDesignProcess(processBtn);
  });
});

//  Wireframe sub-section - code of the arrow buttons
// Show next wireframe
nextWireframeBtn.addEventListener("click", function () {
  if (indexShown >= 2) {
    wireframes[indexShown].classList.add("hidden");
    indexShown = 0;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  } else {
    console.log(indexShown);
    wireframes[indexShown].classList.add("hidden");
    indexShown += 1;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  }
});

// Show previous wireframe
prevWireframeBtn.addEventListener("click", function () {
  if (indexShown <= 0) {
    wireframes[indexShown].classList.add("hidden");
    indexShown = 2;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  } else {
    console.log(indexShown);
    wireframes[indexShown].classList.add("hidden");
    indexShown -= 1;
    wireframes[indexShown].classList.remove("hidden");
    wireframeShown = wireframes[indexShown];
  }
});
>>>>>>> Stashed changes
