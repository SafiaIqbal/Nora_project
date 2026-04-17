// Contact form demo acknowledgment
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Your message has been sent (demo).";
  this.reset();
});
