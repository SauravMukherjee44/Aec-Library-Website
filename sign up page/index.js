

const form = document.getElementById('form');
const fullName = document.getElementById("firstName");
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const regex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
    return regex.test(String(phone).toLowerCase());
}

const validateInputs = () => {
    const nameValue = fullName.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPassword.value.trim();

    if (nameValue === '') {
        alert("Firstname is required !");
        fullName.focus();
    }

    if (usernameValue === '') {
        alert("Username is required !");
        username.focus();
    }

    if (emailValue === '') {
        alert("Email is required !");
        email.focus();
    } else if (!isValidEmail(emailValue)) {
        alert("Provide a valid email address!");
        email.focus();
    }

    if (phoneValue === '') {
        alert("Phone number is required !");
        phone.focus();
    } else if (!isValidPhone(phoneValue)) {
        alert("Provide a valid phone number !");
        phone.focus();
    }

    if (passwordValue === '') {
        alert('Password is required');
        password.focus();
    } else if (passwordValue.length < 8) {
        alert('Password must be at least 8 character.')
        password.focus();
    }

    if (confirmPassValue === '') {
        alert('Please confirm your password');
        confirmPassword.focus();
    } else if (confirmPassValue !== passwordValue) {
        alert("Passwords doesn't match");
        confirmPassword.focus();
    }
};
