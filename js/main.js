
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