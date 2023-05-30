const LoginForm = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const newPassword = document.getElementById("newPassword");
var isVisiblePassword = false;

newPassword.addEventListener("click", () => {
  isVisiblePassword = !isVisiblePassword;
  if (isVisiblePassword) {
    newPassword.setAttribute("class", "fa fa-eye icon");
    password.setAttribute("type", "text");
  } else {
    newPassword.setAttribute("class", "fa fa-eye-slash icon");
    password.setAttribute("type", "password");
  }
});

LoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { user, session, error } = _supabase.auth.signIn({
    email: email.value,
    password: password.value,
  }).then(res=>{
    if(res.error!=null){
      document.getElementById('err_msg').innerHTML = res.error.message;
    }
  })
});

const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");
const messageContainer = document.getElementById("messageContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  messageContainer.style.display = "block"; // Show the message container

  // Redirect to the main page (index.html) after 3 seconds
  setTimeout(function () {
    window.location.replace("/index.html");

  }, 2000);
});




// const session = _supabase.auth.session();
// console.log(session);

_supabase.auth.onAuthStateChange((event, session) => {
  // if (event == 'SIGNED_IN') console.log('SIGNED_IN', session);
  document.getElementById('err_msg').innerHTML = "Logged In";
  location.reload();
})

const user = _supabase.auth.user();
if(user){
  window.location.replace("/sign-up-page/index.html");
}
