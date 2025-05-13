// Modal toggle
function toggleModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Form validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return false;
    }
  
    alert("Message sent!");
    return true;
  }
  