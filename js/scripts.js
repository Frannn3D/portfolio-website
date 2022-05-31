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

function nextPicture(pictures, locIndexShown, pictureShown, showDots) {
  if (locIndexShown >= 2) {
    pictures[locIndexShown].classList.add("hidden");
    locIndexShown = 0;
    pictures[locIndexShown].classList.remove("hidden");
    pictureShown = pictures[locIndexShown];
  } else {
    pictures[locIndexShown].classList.add("hidden");
    locIndexShown += 1;
    pictures[locIndexShown].classList.remove("hidden");
    pictureShown = pictures[locIndexShown];
  }
  indexShown = locIndexShown; // save the local index to the global variable to pass it back
}

function previousPicture(pictures, locIndexShown, pictureShown, showDots) {
  if (locIndexShown <= 0) {
    pictures[locIndexShown].classList.add("hidden");
    locIndexShown = 2;
    pictures[locIndexShown].classList.remove("hidden");
    pictureShown = pictures[locIndexShown];
  } else {
    console.log(locIndexShown);
    pictures[locIndexShown].classList.add("hidden");
    locIndexShown -= 1;
    pictures[locIndexShown].classList.remove("hidden");
    pictureShown = pictures[locIndexShown];
  }
  indexShown = locIndexShown; // save the local index to the global variable to pass it back
}

// ---------------------------- End of Carousel script
