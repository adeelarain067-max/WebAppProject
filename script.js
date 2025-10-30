document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  
  document.getElementById("message").innerText = `Thank you, ${name}! You have registered for ${course}.`;
});
