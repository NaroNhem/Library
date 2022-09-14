let myLibrary =[];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(event) {
    if (author.value == '' || title.value == '' || pages.value =='') {
        error.innerHTML = "Please fill out all entries before adding.";
    } else {
        const book = new Book(author.value, title.value, pages.value);
        const card = ` <div class ="card">
        <h3>AUTHOR</h3>
        <p>${author.value}</p>
        <h3>TITLE</h3>
        <p>${title.value}</p>
        <h3>PAGES</h3>
        <p>${pages.value}</p>
        <h3 id="read">UNREAD</h3>
        <label class="switch">
            <input type="checkbox" id="slider">
            <span class="slider round"></span>
        </label>
            <div class="remCont">
                <button class="remove new">Remove</button>
            </div>
        </div>`;
        content.innerHTML += card;
        myLibrary.push(book);
        modal.style.display = "none";
        author.value ="";
        title.value = "";
        pages.value = ""; 
    }
    const cardElement = document.querySelector(".card");
    const read = document.getElementById("read");
    const slide = document.getElementById("slider");
    const remove = document.querySelector(".remove");
    slide.addEventListener('change', function (event) {
        if (event.target.checked) {
            read.innerHTML = "READ";
        } else {
            read.innerHTML = "UNREAD";
        }
    })
    remove.onclick = function () {
        cardElement.remove();
    }
}


const error = document.querySelector(".error");
const content = document.querySelector(".content");
const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const add = document.querySelector(".add");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".new");
const span = document.querySelector(".close");




btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    error.innerHTML = '';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      error.innerHTML = '';
    }
  }

add.addEventListener('click', addBookToLibrary)



