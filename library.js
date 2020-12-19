let library = [
    /*{
        "title": "Huck Finn",
        "author": "John Smith",
        "pages" : 343,
        "read" : true
    },
    {
        "title": "Tom Sawyer",
        "author": "Mary Jones",
        "pages" : 131,
        "read" : false
    },
    {
        "title": "Goodnight Moon",
        "author": "Jim Kelly",
        "pages" : 2313,
        "read" : true
    }*/
];

let container = document.querySelector('.container');
let addBtn = document.getElementById('addBtn');
let bookForm = document.getElementById('formContainer');
let subBtn = document.getElementById('subBtn');
let titleValue = document.getElementById('title');
let authorValue = document.getElementById('author');
let pagesValue = document.getElementById('pages');
let readValue = document.getElementById('read');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let size = library.length;
    let createBook = new book(title, author, pages, read);
    let newBook = {
        "title": createBook.title,
        "author": createBook.author,
        "pages": createBook.pages,
        "read": createBook.read
    }
    library.push(newBook);
    console.log(library);
    displayBooks();
    /*library[size].title = createBook.title;
    library[size].author = createBook.author;
    library[size].pages = createBook.pages;
    library[size].read = createBook.read;*/


}


subBtn.addEventListener('click', () => {
    if(readValue.checked == true) {
        readValue.value = true;
    }

    else{
        readValue.value = false;
    }
    let title = titleValue.value;
    let author = authorValue.value; 
    let pages = pagesValue.value; 
    let read = readValue.value;
    container.innerHTML = "";
    bookForm.style.display = "none";
    titleValue.value = "";
    authorValue.value = ""; 
    pagesValue.value = ""; 
    readValue.value = true;

    addBookToLibrary(title, author, pages, read)
});

function displayBooks() {
    for(let i = 0; i < library.length; i++) {
        let div = document.createElement('div');
        let ul = document.createElement('ul');
        div.className = "bookContainer"
        ul.innerHTML = `<li>${library[i].title}</li> <li>${library[i].author}</li> <li>${library[i].pages} pages</li>${library[i].read}<li>`;
        div.appendChild(ul);
        container.appendChild(div);
        let readBtn = document.createElement('btn');
        readBtn.innerHTML = "read";
        readBtn.className = "readBtn"

        let btn = document.createElement('btn');
        btn.innerHTML = "delete";
        btn.className = "deleteBtn"
        div.appendChild(readBtn);
        div.appendChild(btn);
        container.appendChild(div);

        btn.addEventListener("click", ()=> {
            container.removeChild(div);
        });

        readBtn.addEventListener("click", ()=> {
            if(library[i].read == true) {
                library[i].read = false;
                ul.innerHTML = `<li>${library[i].title}</li> <li>${library[i].author}</li> <li>${library[i].pages} pages</li>${library[i].read}<li>`;
            }

            else{
                library[i].read = true;
                ul.innerHTML = `<li>${library[i].title}</li> <li>${library[i].author}</li> <li>${library[i].pages} pages</li>${library[i].read}<li>`;
            }
        });

        
        
    }
}

addBtn.addEventListener('click', () => {
    bookForm.style.display = "block";
});
