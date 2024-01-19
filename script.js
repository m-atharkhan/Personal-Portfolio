document.addEventListener('click', function(event) {
  var dropdown = document.getElementById('myDropdown');
  var dropbtn = document.querySelector('.dropbtn');

  // Check if the clicked element is outside the dropdown-content
  if (!dropdown.contains(event.target) && event.target !== dropbtn) {
      dropdown.style.display = 'none';
  }
});

// Function to toggle the visibility of the form
function myFunction() {
  var dropdown = document.getElementById('myDropdown');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
