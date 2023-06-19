const container = document.querySelector('.container');
const addBook = document.querySelector('.add-book');
const modal = document.getElementById('addBookModal');

// array to store book objects
let myLibrary = [];

// myLibrary.forEach(book =>{
//     // create all necesaary html tags for book details
//     const bookDiv = document.createElement('div');
//     const bookTitle = document.createElement('h2');
//     const bookAuthor = document.createElement('h3');
//     const bookPages = document.createElement('h4');
//     const bookStatus = document.createElement('h5');
//     // update the text of html tags to object properties
//     bookTitle.textContent = book.title;
//     bookAuthor.textContent = book.author;
//     bookPages.textContent = book.pages;
//     bookStatus.textContent = book.status;
//     // append tags to bookDiv
//     bookDiv.append(bookTitle, bookAuthor, bookPages, bookStatus);
//     container.appendChild(bookDiv);
// }); 

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


// Object constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}


// function createPrototype() {
//     let newBook = new Book('RDPD', 'Robert Kiyosaki and Sharon Lechter', '765', 'not read yet');
//     return newBook;
// }


// function addBookToLibrary() {
//     myLibrary.push(newBook);
// }