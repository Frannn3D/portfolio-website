console.log("Hi! Welcome to Francesca's Portfolio Site")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
  x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}



function menuContact() {
  var s = screen.width;
  if (s <= 640) {
    var d = document.getElementById('myNavtoggle');
    if (d.className === 'navtoggle') {
    d.className += ' responsive';
    } else {
      d.className = 'navtoggle';
    }
 }
}
