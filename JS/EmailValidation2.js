const scriptURL = 'https://script.google.com/macros/s/AKfycbz5WCRS6VpGC_cjBpJNlY4A-MkwiOUCDv0BSSniX0d0AgcVmFPU/exec';
const newsletterForm= document.forms['google-sheet'];
const btnSubmit = document.getElementById("btnSubmit");
const email = document.getElementById("newsletterEmail");
const name = document.getElementById("newsletterName");

function isEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
}

newsletterForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(name.value == ""){
    swal("Error!","Please enter a valid name !","error");
    }
    else if (!isEmail(email.value)){
    swal("Error!","Please enter a valid email !","error");
    }
    else{
    fetch(
        scriptURL,
        { method : "post", body : new FormData(newsletterForm)}
    )
    .then( (res)=>
        { swal("Thanks For connecting !","We will contact you soon !","success")
        newsletterForm.reset();            
        })
    .catch( (err)=>{ swal("Error !", "Please try again !","error")})
    }

})