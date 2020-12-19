let library = [
    {
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
    }
];

let container = document.querySelector('.container');
let addBtn = document.getElementById('addBtn');
let bookForm = document.getElementById('formContainer');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

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

