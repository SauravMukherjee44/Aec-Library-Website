// Constructor
function Book(date, name, author, type) {
  this.date = date;
  this.name = name;
  this.author = author;
  this.type = type;
}

// typrwiter text
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Display Constructor
function Display() {}

// Add methods to display prototype
let countBooks = 0;
Display.prototype.add = function (book) {
  tableBody = document.getElementById("tableBody");
  countBooks = countBooks + 1;
  let uiString = `<tr id="${countBooks}" style = "background: rgba( 148, 10, 10, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); color: white; font-weight: 900; font-size: 1.5rem;">
                        <td> ${book.date}</td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><button style="margin-top: 0px;" class="btn btn-success" id="edit" onclick="editfunction('${book.name}','${book.author}','${book.type}','${countBooks}','${book.date}')">Edit</button>
                        </td?
                        <td><button style="margin-top: 0px" class="btn btn-danger" id="edit" onclick="deletefunction('${countBooks}')">Delete</button>
                        </td>
                    </tr>`;
  tableBody.innerHTML += uiString;
};


Display.prototype.edit = function (book) {
  tableBody = document.getElementById("tableBody");
  const info=(document.getElementById(countBooks).childNodes);
  info[1].textContent=book.date;
  info[3].textContent=book.name;
  info[5].textContent=book.author;
  info[7].textContent=book.type;

};

// Implement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let date = document.getElementById("issueDate").value;
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let category = document.getElementById("category").value;
  if (date == "" || name == "" || author == "" || category == "") {
    window.alert("Field is Empty!Please Enter Something");
  } else {
     // Show error to the user
     let display = new Display();

    //  display.show("danger", "Sorry you cannot add this book");
     let book = new Book(date, name, author, category);
 
     if (display.validate(book)) {
       let edit =document.getElementById("addBook").classList.contains("edit");
       if(edit){
         display.edit(book);
         document.getElementById("addBook").textContent="Add Book";
        document.getElementById("addBook").classList.remove("edit");
       }
       else{
        display.add(book);
       }
       
       display.clear();
      //  display.show("success", "Your book has been successfully added");
     } else {
       // Show error to the user
       display.show("danger", "Sorry you cannot add this book");
     }
   }
}

// Add submit event listener to searchForm
let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", searchFormSubmit);

function searchFormSubmit(e) {
  const searchText = document.getElementById("searchTxt").value;
  if (searchText == "") {
    window.alert("Search text is Empty! Please Enter Something");
  } else {
    const searchTerms = searchText.split(" ");
    const books = document.querySelectorAll("#tableBody tr");

    books.forEach((book) => {
      const bookTitle = book.querySelector("td:nth-child(2)").textContent;
      const bookAuthor = book.querySelector("td:nth-child(3)").textContent;

      const bookHasSearchTerms = searchBookTerms(searchTerms, { bookTitle, bookAuthor });
      if(bookHasSearchTerms)
        book.style.display = 'table-row';
      else
        book.style.display = 'none';
    })
  }
  e.preventDefault();
}

function searchBookTerms(searchTerms, { ...searchAttrs }) {
  let termFound = false;

  Object.values(searchAttrs).forEach((searchAttr) => {
    termFound = termFound || searchTerms.indexOf(searchAttr) != -1;
  })

  return termFound;
}

//edit function
function editfunction(pbookname, pauthorname, ptype, pbookid,pbookdate) {
  
  document.getElementById("issueDate").value=pbookdate;
  document.getElementById("bookName").value = pbookname;
  document.getElementById("addBook").textContent="Edit";
  document.getElementById("addBook").classList.add("edit");
  document.getElementById("author").value = pauthorname;
  document.getElementById("category").value = ptype;
  // document.getElementById(ptype).checked = true;
  // document.getElementById(pbookid).style.display = "none";
}

//Delete function
function deletefunction(pbookid) {
  document.getElementById(pbookid).style.display = "none";
}

window.onload = function () {
  document.getElementById("loading").style.display = "none";
  // document.getElementById("body").style.display = "block";
};
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view.

//preloader
let timer1;
let preloader = document.querySelector(".preloader");
let nav = document.querySelector(".navbar");
timer1 = setInterval(() => {
  preloader.classList.add("endpreloadopacity");
  $(' html, body').css({
    overflow: 'auto'
  });
  setTimeout(timer1);
}, 4500);
let timer2 = setInterval(() => {
  if(nav){
    nav.classList.remove("nav_beforepreload");
  }
  setTimeout(timer2);
  document.body.style.transition = "0s none";
  document.body.style.transition.delay = "none";
  // document.querySelector(".headervdo").classList.add("headervdo_afterpreload");
}, 4600);
let timer3 = setInterval(() => {
  preloader.style.display = "none";
  setTimeout(timer3);
}, 5500);

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// counter on home page
$(window).on("scroll load resize", function(){
  checkScroll();
  // console.log($(window).scrollTop());
});
function checkScroll(){
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, 8);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  
}
//Chat-Bot Added

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61b60cc480b2296cfdd150ce/1fmni3o8e';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
