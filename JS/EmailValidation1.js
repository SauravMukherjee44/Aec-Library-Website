const btn = document.getElementById("formAnchor");
const form = document.getElementById("feedbackForm");
const feedbackName = document.getElementById("feedbackName");
const feedbackEmail = document.getElementById("feedbackEmail");
const msg = document.getElementById("txtid");

function isEmail(email) {
let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return regexp.test(String(email).toLowerCase());
}

btn.addEventListener("click", () => {
if (feedbackName.value == "") {
    swal("Error !", "Please enter a valid name", "error");
}
else if (!isEmail(feedbackEmail.value)) {
    swal("Error !", "Please enter a valid email", "error");
}
else if (msg.value == "") {
    swal("Error !", "Please enter a message", "error");
}
else {
    swal("Thank You !", "Your feedback is posted !", "success");
    form.reset();
}
})