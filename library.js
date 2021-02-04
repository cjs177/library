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

storageRead();

/*function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}*/

class book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let createBook = new book(title, author, pages, read);
    let newBook = {
        "title": createBook.title,
        "author": createBook.author,
        "pages": createBook.pages,
        "read": createBook.read
    }
    library.push(newBook);
    storageSave()
    displayBooks();
}

function storageSave() {
    let library_serialized = JSON.stringify(library);
    localStorage.setItem("library", library_serialized);
}

function storageRead() {
    let library_deserialized = JSON.parse(localStorage.getItem("library"));
    if(library_deserialized){
        library = library_deserialized;
    }
    displayBooks();
}


subBtn.addEventListener('click', () => {
    if(readValue.checked == true) {
        readValue.value = "Finished";
    }

    else{
        readValue.value = "Reading";
    }
    let title = titleValue.value;
    let author = authorValue.value; 
    let pages = pagesValue.value; 
    let read = readValue.value;
    if(title === "" || author === "" || pages === "" || isNaN(pages) === true){
        return false;
    }
    container.innerHTML = "";
    bookForm.style.display = "none";
    titleValue.value = "";
    authorValue.value = ""; 
    pagesValue.value = ""; 
    readValue.value = "Finished";
    addBookToLibrary(title, author, pages, read);
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

        let deleteBtn = document.createElement('btn');
        deleteBtn.innerHTML = "delete";
        deleteBtn.className = "deleteBtn"
        div.appendChild(readBtn);
        div.appendChild(deleteBtn);
        container.appendChild(div);

        deleteBtn.addEventListener("click", ()=> {
            container.removeChild(div);
            library.splice(library.indexOf(library[i]), 1);
            let tempArray = library;
            localStorage.clear();
            let library_serialized = JSON.stringify(tempArray);
            localStorage.setItem("library", library_serialized);
            
        });

        readBtn.addEventListener("click", ()=> {
            if(library[i].read == "Finished") {
                library[i].read = "Reading";
                ul.innerHTML = `<li>${library[i].title}</li> <li>${library[i].author}</li> <li>${library[i].pages} pages</li>${library[i].read}<li>`;
            }

            else{
                library[i].read = "Finished";
                ul.innerHTML = `<li>${library[i].title}</li> <li>${library[i].author}</li> <li>${library[i].pages} pages</li>${library[i].read}<li>`;
            }
            storageSave();
        });

        
        
    }
}

addBtn.addEventListener('click', () => {
    bookForm.style.display = "block";
});