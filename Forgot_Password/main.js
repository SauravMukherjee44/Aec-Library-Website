const RecoveryForm = document.querySelector('#recovery_form');
const email = document.querySelector('#email');
RecoveryForm.addEventListener('submit',e=>{
  e.preventDefault();
  const { data, error } = _supabase.auth.api
  .resetPasswordForEmail(email.value).then(res=>{
    if(res.error==null){
      document.getElementById('err_msg').innerHTML = "Mail Sent Successfully";
    }
    else{
      document.getElementById('err_msg').innerHTML = "Account Not Found";
    }
  });
})
