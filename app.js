const container = document.querySelector('.container');
const addBook = document.querySelector('.add-book');
const modal = document.getElementById('addBookModal');
const bookForm = document.getElementById('book-form');

// array to store book objects
let myLibrary = [];


// opens modal
addBook.addEventListener('click', ()=>{
    modal.classList.toggle('show');
})

// close modal by clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
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
    showBookInLibrary();

    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    closeModal();
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
}

function showBookInLibrary() {
    // get last item on array 
    let lastItem = myLibrary[myLibrary.length - 1];
    let indexOfBook = myLibrary.indexOf(lastItem);
    // creates html tags for new book entry
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookStatus = document.createElement('button');
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-btn');
    bookDiv.classList.add('book-card');
    bookStatus.classList.add('status', lastItem.status);
    bookDiv.dataset.index = indexOfBook;

    // update the text of html tags to object properties
    bookTitle.textContent = `Title: ${lastItem.title}`;
    bookAuthor.textContent = `Author: ${lastItem.author}`;
    bookPages.textContent = `${lastItem.pages} pages`;
    bookStatus.textContent = lastItem.status;
    deleteBook.textContent = 'Delete';
    deleteBook.dataset.btnIndex = indexOfBook;
    // append tags to bookDiv
    bookDiv.append(bookTitle, bookAuthor, bookPages, bookStatus, deleteBook);
    container.appendChild(bookDiv);


    bookStatus.addEventListener('click', toggleStatus);
    deleteBook.addEventListener('click', deleteBookEntry);


}

function closeModal() {
    modal.classList.remove('show');
}

function toggleStatus(e) {
    // get book index
    let position = e.target.parentElement.dataset.index;
    position = parseInt(position);

    if (e.target.classList.contains('unread')) {
        let bookProto = myLibrary[position];
        bookProto.status = 'read';
        e.target.classList.remove('unread');
        e.target.classList.add('read');
        e.target.textContent = 'read';
    } else if (e.target.classList.contains('read')) {
        let bookProto = myLibrary[position];
        bookProto.status = 'unread';
        e.target.classList.remove('read');
        e.target.classList.add('unread');
        e.target.textContent = 'unread';
    }
}


function updateDatasetIndex() {
    let books = document.querySelectorAll('.book-card');
    let btnIndex = document.querySelectorAll('.delete-btn');
    books = Array.from(books);
    btnIndex = Array.from(btnIndex);

    // updates all index after deletion
    books.forEach((book) => {
        book.dataset.index = books.indexOf(book);
    })

    btnIndex.forEach((btn) => {
        btn.dataset.btnIndex = btnIndex.indexOf(btn);
    })
}

function deleteBookEntry(e) {
    let targetBook = e.target.dataset.btnIndex;
    let books = document.querySelectorAll('.book-card');
    // convert nodelist to array
    books = Array.from(books);
    // looks for book with same index as targetBook
    books.forEach((book) => {
        if (book.dataset.index === targetBook) {
            book.remove();
        }
    })
    // removes targerBook from myLibrary array
    myLibrary.splice(targetBook, 1);

    updateDatasetIndex();
}

