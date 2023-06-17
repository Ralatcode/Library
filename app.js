// array to store book objects
let obj1 = new Book('RDPD', 'Robert Kiyosaki and Sharon Lechter', 765, 'not read yet');
let obj2 = new Book ('LDFH', 'A.H. Mohammed', 126, 'read');
let obj3 = new Book ('Wired', 'Buchanan-Renard', 329, 'not read yet');

const container = document.querySelector('.container');
const addBook = document.querySelector('.add-book');

let myLibrary = [obj1, obj2, obj3];

myLibrary.forEach(book =>{
    // create all necesaary html tags for book details
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookStatus = document.createElement('h5');
    // update the text of html tags to object properties
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookStatus.textContent = book.status;
    // append tags to bookDiv
    bookDiv.append(bookTitle, bookAuthor, bookPages, bookStatus);
    container.appendChild(bookDiv);
}); 

addBook.addEventListener('click', ()=>{
    console.log('clicked me');
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