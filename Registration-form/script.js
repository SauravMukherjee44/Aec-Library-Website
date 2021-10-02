/*main function*/
function click_submit() {
  fst();
  lst();
  age_cal();
  eemail();
  user();
  passcheck();
  return false;
}

/*Maximum length of the First Name and should be 30 characters*/

function fst() {
  var fstname = document.getElementById("fstname");
  var namecharac = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (fstname.value == "") {
    document.getElementById("fst").innerHTML = "**enter your frist name*!";
    return false;
  } else if (!namecharac.test(fstname.value)) {
    document.getElementById("fst").innerHTML =
      "**frist name can not consist numbers*!";
    return false;
  } else if (fstname.value.length > 30) {
    document.getElementById("fst").innerHTML =
      "**maximum length of the first name should be 30 characters";
    return false;
  } else {
    document.getElementById("fst").innerHTML = "";
  }
}

/*Maximum length of the Last Name should be 30 characters*/

function lst() {
  var lstname = document.getElementById("lstname");
  var namecharac = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (lstname.value == "") {
    document.getElementById("lst").innerHTML = "**enter your frist name*!";
    return false;
  } else if (!namecharac.test(lstname.value)) {
    document.getElementById("lst").innerHTML =
      "**last name can not consist numbers*!";
    return false;
  } else if (lstname.value.length > 30) {
    document.getElementById("lst").innerHTML =
      "****maximum length of the last name should be 30 characters";
    return false;
  } else {
    document.getElementById("lst").innerHTML = "";
  }
}

/*Calculate the age of the user once he/she completes with the “Date of Birth” field*/

function age_cal() {
  var dateofbrith = document.getElementById("DOB").value;
  var dobateofbrith_ateofbrith = new Date(dateofbrith);

  if (dateofbrith == "") {
    document.getElementById("dob_error").innerHTML =
      "**pick your date of brith!";
    return false;
  } else if (dateofbrith) {
    var mon = Date.now() - dobateofbrith_ateofbrith.getTime();
    var age = new Date(mon);
    var year = age.getUTCFullYear();
    var age = Math.abs(year - 1970);
    document.getElementById("Calculate_the_age").innerHTML =
      "Your Age is" + " " + age + " " + "years old ";
    document.getElementById("dob_error").innerHTML = "";
    return false;
  }
}

/*Check if a valid email address is entered*/

function eemail() {
  var email = document.getElementById("Email");
  var emailcosistcharactors =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email.value == "") {
    document.getElementById("email").innerHTML = "**enter your email!";
    return false;
  } else if (!emailcosistcharactors.test(email.value)) {
    document.getElementById("email").innerHTML =
      "mail should be correct format!!";
    return false;
  } else {
    document.getElementById("email").innerHTML = "";
  }
}

/*Username should only contain with simple case letters and should not contain spaces. Max length should be 10 characters*/

function user() {
  var Username = document.getElementById("Username");
  var contain_spaces = /\s/g;
  if (Username.value == "") {
    document.getElementById("user_name").innerHTML = "**create your user name";
    return false;
  } else if (Username.value.length > 10) {
    document.getElementById("user_name").innerHTML =
      "**Max length 10 characters!";
    return false;
  } else if (Username.value.match(contain_spaces)) {
    document.getElementById("user_name").innerHTML =
      "**user name should not contain spaces";
    return false;
  } else if (/[A-Z]/.test(Username.value)) {
    document.getElementById("user_name").innerHTML =
      "**use simple case letters only";
    return false;
  } else {
    document.getElementById("user_name").innerHTML = " ";
  }
}

/*Password should contain letters and at least one number and length should be between 6 to 15*/

function passcheck() {
  var Password = document.getElementById("Password ");
  var confrimpassword = document.getElementById("Confirmpassword");
  check_password_confirm();
  if (Password.value == "") {
    document.getElementById("pwd").innerHTML = "**enter your password";
    return false;
  }
  if (Password.value.length < 6) {
    document.getElementById("pwd").innerHTML =
      "**Password length should bebetween (6 to 15)!";
    return false;
  }
  if (Password.value.length > 15) {
    document.getElementById("pwd").innerHTML =
      "**Password length should bebetween (6 to 15)!";
    return false;
  }
  if (
    Password.value.search([/a-z/] < 1) &&
    Password.value.search([/A-Z/] < 1) &&
    Password.value.search(/[0-9]/) == -1
  ) {
    document.getElementById("pwd").innerHTML =
      "**Password should contain small & capital letters and at least one number!";
    return false;
  } else {
    document.getElementById("pwd").innerHTML = "";
    return false;
  }

  /*The password and confirm password should match*/

  function check_password_confirm() {
    if (confrimpassword.value == "") {
      document.getElementById("cmdpwd").innerHTML = "**enter confrim password!";
      return false;
    }
    if (Password.value != confrimpassword.value) {
      document.getElementById("cmdpwd").innerHTML = "**Passwords are not match";
      return false;
    }
    if (Password.value == confrimpassword.value) {
      document.write("Welcome to our page your details saved");
      return false;
    }
  }
}

/*Checkbox should be ticked to enable the submit button*/

function termsandcond(termsCheckBox) {
  if (termsCheckBox.checked) {
    document.getElementById("submit_button").disabled = false;
  } else {
    document.getElementById("submit_button").disabled = true;
  }
}
