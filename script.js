// Smooth scroll function

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}

// Form submission handler

document.querySelector("form").addEventListener("submit", function(event) {

  event.preventDefault();

  alert("Thank you! Your message has been sent.");

  this.reset();

});