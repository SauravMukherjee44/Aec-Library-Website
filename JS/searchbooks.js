function searchbooks() {
var q = document.getElementById("searchTxt");
var v = q.value.toLowerCase();
var rows = document.getElementsByTagName("tr");
//var on = 0;
for ( var i = 0; i < rows.length; i++ ) {
var fullname = rows[i].getElementsByTagName("td");
fullname = fullname[1].innerHTML.toLowerCase();
console.log(fullname);
if ( fullname.indexOf(v) > -1  ) {
    if ( fullname.indexOf(v) > -1 )  {
    rows[i].style.display = "";
    } else {
    rows[i].style.display = "none";
    }
}
}
  // var n = document.getElementById("noresults");
  // if ( on == 0 && n ) {
  //   n.style.display = "";
  //   document.getElementById("qt").innerHTML = q.value;
  // } else {
  //   n.style.display = "none";
  // }
    }