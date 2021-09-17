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
  console.log("Adding to UI");
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
                        <td><button style="margin-top: 0px;" class="btn btn-success" id="edit" onclick="editfunction('${book.date}','${book.name}','${book.author}','${book.type}','${countBooks}')">Edit</button>
                        </td?
                        <td><button style="margin-top: 0px" class="btn btn-danger" id="edit" onclick="deletefunction('${countBooks}')">Delete</button>
                        </td>
                    </tr>`;
  tableBody.innerHTML += uiString;
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
  console.log("YOu have submitted library form");
  let date = document.getElementById("issuedate").value;
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type = document.getElementById("type").value;

  let book = new Book(date, name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully added");
  } else {
    // Show error to the user
    display.show("danger", "Sorry you cannot add this book");
  }

  e.preventDefault();
}

//edit function
function editfunction(pbookname, pauthorname, ptype, pbookid) {
  document.getElementById("bookName").value = pbookname;
  document.getElementById("author").value = pauthorname;
  document.getElementById(ptype).checked = true;
  document.getElementById(pbookid).style.display = "none";
}

//Delete function
function deletefunction(pbookid) {
  document.getElementById(pbookid).style.display = "none";
}

window.onload = function () {
  document.getElementById("loading").style.display = "none";
  document.getElementById("body").style.display = "block";
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
  setTimeout(timer1);
}, 4500);
let timer2 = setInterval(() => {
  nav.classList.remove("nav_beforepreload");
  setTimeout(timer2);
  document.body.style.transition = "0s none";
  document.body.style.transition.delay = "none";
  document.querySelector(".headervdo").classList.add("headervdo_afterpreload");
}, 4600);
let timer3 = setInterval(() => {
  preloader.style.display = "none";
  setTimeout(timer3);
}, 5500);
