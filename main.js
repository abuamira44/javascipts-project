avascript
// Smooth scrolling effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  // Send form values to an API or perform relevant actions
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Reset form after submission
  this.reset();
});
