//modal loading
window.onload =function modal(){
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
    myModal.toggle();
    let loader = document.getElementById('loading');
    loader.style.width ="0px";
    loader.style.height = "0px";
}