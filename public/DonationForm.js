const donationForm = document.getElementById('donation_form');
const { createClient } = supabase
const supabaseUrl = `https://cvhyilfsattdglfdmvcu.supabase.co`
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aHlpbGZzYXR0ZGdsZmRtdmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NTE5MTksImV4cCI6MTk2MDEyNzkxOX0.wvKZxYcBbeUy9aJTw3XzbySmBJ8PkxVGXeopoucQpGY`

const _supabase = createClient(supabaseUrl, supabaseAnonKey);

const donatedBook = document.querySelector('.donated_book');


donationForm.addEventListener('submit',e=>{
e.preventDefault();
const { data, error } = _supabase
    .from('donated_book')
    .insert([
    {
        email:document.getElementById('email').value,
        name:document.getElementById('name').value,
        contact : document.getElementById('contact').value,
        address : document.getElementById('address').value,
        country : document.querySelector('.country').value,
        city : document.querySelector('.city').value,
        zip : document.getElementById('zip').value,
    }
    ]).then(res=>{
    console.log(res);
    if(res.error){
        alert(res.error.message);
    }
    else{
    alert('Data Added');
    }
    })
})