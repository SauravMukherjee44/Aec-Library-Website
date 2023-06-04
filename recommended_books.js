let booksList=``
const recommended_books = document.getElementById("recommended_books")
const url = "./recommended_books.json"
fetch(url)
.then(response => response.json())
.then(data =>  
{
  console.log(data)
  for(let i=0; i<data.length; i++){
    booksList+= `<div class="bborder">
          <img src="${data[i].img}" alt="book ${data[i].id}">
          <a href="${data[i].url}" target="_blank">
            <button class="btn btn-default" id="btn-download">
              Download as pdf
            </button> 
          </a>
      </div>`   
  }
  recommended_books.innerHTML=booksList
})
