const container = document.querySelector('.container');
const addBook = document.querySelector('.add-book');
const modal = document.getElementById('addBookModal');
const bookForm = document.getElementById('book-form');

// array to store book objects
let myLibrary = [];


// opens modal
addBook.addEventListener('click', ()=>{
    modal.style.display = 'block';
})

// close modal by clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

// get user form input 
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formAuthor = document.getElementById('author');
    let formTitle = document.getElementById('title');
    let formPages = document.getElementById('pages');
    let formStatus = document.getElementsByName('status');

    for (let input of formStatus) {
        if (input.checked) {
            formStatus = input.value;
        }
    }

    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formStatus);

    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
})


// Object constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}



function addBookToLibrary(title, author, pages, status) {
    // create proto from constructor
    let newBook = new Book(title, author, pages, status);
    // store new book prototype in array
    myLibrary.push(newBook);
    // creates html format for new book
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookStatus = document.createElement('h5');
    bookDiv.classList.add('book-card');
    // update the text of html tags to object properties
    bookTitle.textContent = `Title: ${newBook.title}`;
    bookAuthor.textContent = `Author: ${newBook.author}`;
    bookPages.textContent = `${newBook.pages} pages`;
    bookStatus.textContent = newBook.status;
    // append tags to bookDiv
    bookDiv.append(bookTitle, bookAuthor, bookPages, bookStatus);
    container.appendChild(bookDiv);
}