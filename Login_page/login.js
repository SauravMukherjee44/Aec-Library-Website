const LoginForm = document.querySelector('#login_form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
LoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { user, session, error } = _supabase.auth.signIn({
    email: email.value,
    password: password.value,
  }).then(res=>{
    console.log(res);
    if(res.error!=null){
      document.getElementById('err_msg').innerHTML = res.error.message;
    }
  })
});

// const session = _supabase.auth.session();
// console.log(session);

_supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') console.log('SIGNED_IN', session);
  document.getElementById('err_msg').innerHTML = "Logged In";
  location.reload();
})

const user = _supabase.auth.user();
if(user){
  window.location.replace("/sign up page/index.html");
}
