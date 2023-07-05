
var toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var listItem = this.parentElement;
    listItem.classList.toggle('active');
  });
});
