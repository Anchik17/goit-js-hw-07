const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

    const emailInput = event.currentTarget.email;
    const passwordInput = event.currentTarget.password;
    
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
  }

  console.log("Email:", emailValue);
  console.log("Password:", passwordValue);

  loginForm.reset();
});
