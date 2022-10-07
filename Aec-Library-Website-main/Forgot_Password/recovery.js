const RecoveryForm = document.querySelector('#recovery_form_final');
const password = document.querySelector('#password');
var url = window.location.href.toString();

var myArr = url.split("=");
var token = myArr[1].toString().split("&");
var token = token[0];

RecoveryForm.addEventListener('submit',e=>{
  e.preventDefault();
  const { error, data } = _supabase.auth.api
      .updateUser(token, { password : password.value }).then(res=>{
        if(res.error == null){
            document.getElementById('err_msg').innerHTML = "Password updated Successfully.. Go and <a href='/Login_page/login_page.html'>login</a>";
        }
      })
})
