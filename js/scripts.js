function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

// ------------------------------------
// CAROUSEL SCRIPT

function nextPicture(pictures, locIndexShown, showDots, dots) {
  // check if the picture shown is the last one
  if (locIndexShown >= pictures.length - 1) {
    pictures[locIndexShown].classList.add("hidden");
    if (showDots) {
      dots[locIndexShown].classList.remove("dot-active");
    }
    locIndexShown = 0;
    pictures[locIndexShown].classList.remove("hidden");
    if (showDots) {
      dots[locIndexShown].classList.add("dot-active");
    }
  } else {
    // if it is not, then it will move to the next picture
    pictures[locIndexShown].classList.add("hidden");
    if (showDots) {
      dots[locIndexShown].classList.remove("dot-active");
    }
    locIndexShown += 1;
    pictures[locIndexShown].classList.remove("hidden");
    if (showDots) {
      dots[locIndexShown].classList.add("dot-active");
    }
  }
  indexShown = locIndexShown; // save the local index to the global variable to pass it back
}

function previousPicture(pictures, locIndexShown, showDots, dots) {
  // checks if the picture shown is already the first one -  if it is then it will go back to the last picture of the array
  if (locIndexShown <= 0) {
    pictures[locIndexShown].classList.add("hidden");
    if (showDots) {
      dots[locIndexShown].classList.remove("dot-active");
    }
    locIndexShown = pictures.length - 1;
    pictures[locIndexShown].classList.remove("hidden");
    if (showDots) {
      dots[locIndexShown].classList.add("dot-active");
    }
  } else {
    // if it is not, then it will go to the previous one
    console.log(locIndexShown);
    pictures[locIndexShown].classList.add("hidden");
    if (showDots) {
      dots[locIndexShown].classList.remove("dot-active");
    }
    locIndexShown -= 1;
    pictures[locIndexShown].classList.remove("hidden");
    if (showDots) {
      dots[locIndexShown].classList.add("dot-active");
    }
  }
  indexShown = locIndexShown; // save the local index to the global variable to pass it back
}

// ---------------------------- End of Carousel script
