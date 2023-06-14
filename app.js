// array to store book objects
let myLibrary = [];


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

let newBook = new Book('RDPD', 'Robert Kiyosaki and Sharon Lechter', '765', 'not read yet');
myLibrary.push(newBook);

console.log(myLibrary);

// function addBookToLibrary() {
//     myLibrary.push(newBook);
// }