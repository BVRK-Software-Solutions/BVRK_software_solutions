
var toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var listItem = this.parentElement;
    listItem.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});

document.addEventListener("keydown", function(e) {
  console.log("key pressed", e.code);
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight", "Numpad3", "Numpad9", "Numpad7", "Numpad1", "Home", "End"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);