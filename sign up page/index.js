

const form = document.getElementById('form');
const fullName = document.getElementById("firstName");
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const section = document.querySelector('.section');
const logged_in = document.querySelector('.logged_in');
const logged_out = document.getElementById('logged_out');

form.addEventListener('submit', e => {
    e.preventDefault();
    const { user, session, error } = _supabase.auth.signUp({
        email: email.value,
        password: password.value,
      },
      {
        data: {
          first_name: username.value,
          phone : phone.value,
        }
      }
    ).then(res=>{
      console.log(res);
      if(res.error!=null){
        console.log(res.error.message);
        document.getElementById('err').innerHTML = res.error.message;
      }
      if(res.error==null){
        window.location.replace("/Login_page/login_page.html")
      }
    })
});

const user = _supabase.auth.user()
if(user){
  section.style.display="none";
  logged_in.style.display-"block";
}
else{
  logged_in.style.display="none";
}


logged_out.addEventListener('click',e =>{
  e.preventDefault();
  const { error } = _supabase.auth.signOut();
  location.reload();
})
