document.getElementById("email").addEventListener("input", function () {
   var email = this.value.trim();
   if (validateEmail(email)) {
      document.getElementById("mail").style.display = "none";
   }
});

document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("cPassword").addEventListener("input", validatePassword);

function validatePassword() {
   var password = document.getElementById("password").value.trim();
   var cPassword = document.getElementById("cPassword").value.trim();

   if (password !== cPassword) {
      document.getElementById("cpass").innerText = "Passwords do not match.";
      document.getElementById("cpass").style.display = "block";
   } else {
      document.getElementById("pass").style.display = "none";
      document.getElementById("cpass").style.display = "none";
   }
}

function validateForm() {
   var firstName = document.getElementById("firstName").value.trim();
   var lastName = document.getElementById("lastName").value.trim();
   var address = document.getElementById("address").value.trim();
   var phone = document.getElementById("phone").value.trim();
   var email = document.getElementById("email").value.trim();
   var password = document.getElementById("password").value.trim();
   var cPassword = document.getElementById("cPassword").value.trim();

   if (firstName == "" || firstName.length <= 1) {
      document.getElementById("fname").innerText = "Enter a First Name!..";
      document.getElementById("fname").style.display = "flex";
   } else {
      document.getElementById("fname").style.display = "none";
   }

   if (lastName == "") {
      document.getElementById("lname").innerText = "Enter a Last Name!..";
      document.getElementById("lname").style.display = "flex";
   } else {
      document.getElementById("lname").style.display = "none";
   }

   if (address == "") {
      document.getElementById("add").innerText = "Enter a Address!..";
      document.getElementById("add").style.display = "flex";
   } else {
      document.getElementById("add").style.display = "none";
   }

   if (phone == "" || phone.length < 10) {
      document.getElementById("ph").innerText = "Enter a Phone Number!..";
      document.getElementById("ph").style.display = "flex";
   } else {
      document.getElementById("ph").style.display = "none";
   }

   if (email == "") {
      document.getElementById("mail").innerText = "Enter a Email Address!..";
      document.getElementById("mail").style.display = "flex";
   } else {
      document.getElementById("mail").style.display = "none";
   }

   if (password == "") {
      document.getElementById("pass").innerText = "Enter a Password!..";
      document.getElementById("pass").style.display = "flex";
   } else {
      document.getElementById("pass").style.display = "none";
   }

   if (cPassword == "") {
      document.getElementById("cpass").innerText = "Enter the Confirm Password!..";
      document.getElementById("cpass").style.display = "flex";
   } else {
      document.getElementById("cpass").style.display = "none";
   }

   if (!validateEmail(email)) {
      document.getElementById("mail").innerText = "Enter a valid email address!..";
      document.getElementById("mail").style.display = "flex";
      return false;
   }

   if (password !== cPassword) {
      document.getElementById("pass").innerText = "Passwords do not match.";
      document.getElementById("pass").style.display = "block";
      return false;
   }

   if (
      firstName !== "" &&
      lastName !== "" &&
      address !== "" &&
      phone !== "" &&
      email !== "" &&
      password !== "" &&
      cPassword !== "" &&
      validateEmail(email) &&
      password === cPassword
   ) {
      // Display an alert message indicating successful registration
      alert("Registration completed!");
   }
}

function preventNumbers(event) {
   if (event.keyCode >= 48 && event.keyCode <= 57) {
      event.preventDefault();
   }
}
document.getElementById("firstName").addEventListener("keypress", preventNumbers);
document.getElementById("lastName").addEventListener("keypress", preventNumbers);

function preventSpecialCharacters(event) {
   var charCode = event.which || event.keyCode;
   var charStr = String.fromCharCode(charCode);
   var allowedChars = /^[a-zA-Z0-9\s]+$/; // Include \s for whitespace
   if (!allowedChars.test(charStr)) {
      event.preventDefault();
   }
}

document.getElementById("firstName").addEventListener("keypress", preventSpecialCharacters);
document.getElementById("lastName").addEventListener("keypress", preventSpecialCharacters);
document.getElementById("address").addEventListener("keypress", preventSpecialCharacters);

function preventNonNumeric(event) {
   var charCode = event.which || event.keyCode;
   if (charCode < 48 || charCode > 57) {
      event.preventDefault();
   }
}

function limitLength(event) {
   var input = event.target.value;
   if (input.length >= 10) {
      event.preventDefault();
      event.target.value = input.substring(0, 10);
   }
}

document.getElementById("phone").addEventListener("keypress", preventNonNumeric);
document.getElementById("phone").addEventListener("input", limitLength);

function validateEmail(email) {
   var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
   return emailRegex.test(email);
}
