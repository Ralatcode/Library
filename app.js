// array to store book objects
let obj1 = new Book('RDPD', 'Robert Kiyosaki and Sharon Lechter', 765, 'not read yet');
let obj2 = new Book ('LDFH', 'A.H. Mohammed', 126, 'read');
let obj3 = new Book ('Wired', 'Buchanan-Renard', 329, 'not read yet');
let myLibrary = [obj1, obj2, obj3];



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