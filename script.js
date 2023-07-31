function validateForm() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (name === "") {
        document.getElementById("message").innerHTML="Name field cannot be empty";
        return false;
    }

    if (username === "") {
      document.getElementById("message").innerHTML="Username field cannot be empty";
      return false;
    }
  
    if (email === "") {
      document.getElementById("message").innerHTML="Email field cannot be empty";
      return false;
    }
  
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("message").innerHTML="Invalid email format";
      return false;
    }
  
    if (password === "") {
      document.getElementById("message").innerHTML="Password field cannot be empty";
      return false;
    }

    if (password.length<8 || password.length>16) {
        document.getElementById("message").innerHTML="Password should be lessthen 8 characters and greaterthen 16 characters";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("message").innerHTML="Passwords do not match";
      return false;
    }
  
    return true;
  }
  