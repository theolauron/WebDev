document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmation = document.getElementById("confirmationMessage");

  if (name && email && message) {
    confirmation.textContent = `Thank you, ${name}. Your message has been sent!`;
    confirmation.style.color = "green";
    this.reset();
  } else {
    confirmation.textContent = "Please fill in all fields.";
    confirmation.style.color = "red";
  }
});
