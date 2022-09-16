const myLibrary =[];


        
function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}
let id = 0;
function addBookToLibrary(event) {
    let authorInput = author.value;
    let titleInput = title.value;
    let pagesInput = pages.value
    const book = new Book(authorInput, titleInput, pagesInput, 'unread')
    id++;
    myLibrary.push(book);
}


// function addBookToLibrary(event) {
//     const card = ` <div class ="card" id="${id}">
//         <h3>AUTHOR</h3>
//         <p>${author.value}</p>
//         <h3>TITLE</h3>
//         <p>${title.value}</p>
//         <h3>PAGES</h3>
//         <p>${pages.value}</p>
//         <h3 id="read">UNREAD</h3>
//         <label class="switch">
//             <input type="checkbox" id="slider">
//             <span class="slider round"></span>
//         </label>
//             <div class="remCont">
//                 <button class="remove new">Remove</button>
//             </div>
//         </div>`;
//     if (author.value == '' || title.value == '' || pages.value =='') {
//         error.innerHTML = "Please fill out all entries before adding.";
//     } else {
//         const book = new Book(author.value, title.value, pages.value,id);
//         content.innerHTML += card;
//         myLibrary.push(book);
//         modal.style.display = "none";
//         author.value ="";
//         title.value = "";
//         pages.value = ""; 
//         id++;
//     }
//     const cardElement = document.querySelector(".card");
//     const read = document.getElementById("read");
//     const slide = document.getElementById("slider");
//     const remove = document.querySelector(".remove");
//     slide.addEventListener('change', function (event) {
//         if (event.target.checked) {
//             read.innerHTML = "READ";
//         } else {
//             read.innerHTML = "UNREAD";
//         }    })
//     function removeCard() {
//         let index = myLibrary.findIndex(b => b.id === (myLibrary[this.id]))
//         myLibrary.splice(index.id, 1)
//         cardElement.remove();
//     }
//     remove.addEventListener('click', removeCard);
// }


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

add.addEventListener('click', function (e) {
    if (author.value == '' || title.value == '' || pages.value =='') {
        error.innerHTML = "Please fill out all entries before adding."
    }   
    else {
            addBookToLibrary();
            modal.style.display = "none";
            author.value ="";
            title.value = "";
            pages.value = "";
            content.innerHTML = "";
            updateDisplay(myLibrary);
        }
});
function createCard(author, title, pages) {
    let a = ` <div class ="card">
        <h3>AUTHOR</h3>
        <p>${author}</p>
        <h3>TITLE</h3>
        <p>${title}</p>
        <h3>PAGES</h3>
        <p>${pages}</p>
        <h3 id="read">UNREAD</h3>
        <label class="switch">
            <input type="checkbox" id="slider">
            <span class="slider round"></span>
        </label>
            <div class="remCont">
                <button class="remove new">Remove</button>
            </div>
        </div>`
    const myFragment = document.createRange()
    .createContextualFragment(a)
    content.appendChild(myFragment);
    
}
function updateDisplay(arr) {
    content.innerHTML = "";
    arr.forEach((book) => {
        createCard(book.author, book.title, book.pages)
    });
    removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((card, index) =>  {
        card.addEventListener('click', () => {
            removeCard(index);
        })
    })
    changeRead();
}

function changeRead() {
    const read = document.querySelectorAll("#read");
    const slide = document.querySelectorAll("#slider");
    myLibrary.forEach((b, index) => {
        if (b.status == "unread") {
            read[index].innerHTML = "UNREAD";
        } else {
            read[index].innerHTML = "READ";
            slide[index].checked = true;
        }
    })
}

function read(index) {
    myLibrary[index].status = "read";
    changeRead();
}
function unread(index) {
    myLibrary[index].status = "unread";
    changeRead();
}
function removeCard(index) {
    myLibrary.splice(index,1);
    updateDisplay(myLibrary);
}
window.addEventListener("load", () => {
    updateDisplay(myLibrary);
  });
content.addEventListener('click', function (e) {
    const slide = document.querySelectorAll("#slider");
    slide.forEach((slider, index) => {
        slider.addEventListener('change', function (event) {
            if (event.target.checked) {
                read(index);
            } else {
                unread(index);
            }    
        })
    })
})




    

