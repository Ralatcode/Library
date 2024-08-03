/* eslint-disable no-undef */
const container = document.querySelector('.container');
const addBook = document.querySelector('.add-book');
const modal = document.getElementById('addBookModal');
const bookForm = document.getElementById('book-form');
const closeModalBtn = document.querySelector('.close-btn');

// array to store book objects
const myLibrary = [];
// Book Class
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  updateStatus() {
    if (this.status === 'read') {
      this.status = 'unread';
    } else if (this.status === 'unread') {
      this.status = 'read';
    }
  }
}

// creates instance for book item
function addBookToLibrary(title, author, pages, status) {
  // create proto from constructor
  const newBook = new Book(title, author, pages, status);
  // store new book prototype in array
  myLibrary.push(newBook);
}

function toggleStatus(e) {
  // get book index
  let position = e.target.parentElement.dataset.index;
  position = parseInt(position, 10);

  if (e.target.classList.contains('unread')) {
    const bookProto = myLibrary[position];
    bookProto.updateStatus();
    e.target.classList.remove('unread');
    e.target.classList.add('read');
    e.target.textContent = 'read';
  } else if (e.target.classList.contains('read')) {
    const bookProto = myLibrary[position];
    bookProto.updateStatus();
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
    const eachBook = book;
    eachBook.dataset.index = books.indexOf(book);
  });

  btnIndex.forEach((btn) => {
    const eachBtn = btn;
    eachBtn.dataset.btnIndex = btnIndex.indexOf(btn);
  });
}

function deleteBookEntry(e) {
  const targetBook = e.target.dataset.btnIndex;
  let books = document.querySelectorAll('.book-card');
  // convert nodelist to array
  books = Array.from(books);
  // looks for book with same index as targetBook and removes it fron DOM
  books.forEach((book) => {
    if (book.dataset.index === targetBook) {
      book.remove();
    }
  });
  // removes targerBook from myLibrary array
  myLibrary.splice(targetBook, 1);
  // updates dataset of remaining books in the DOM
  updateDatasetIndex();
}

function showBookInLibrary() {
  // get last item on array
  const lastItem = myLibrary[myLibrary.length - 1];
  const indexOfBook = myLibrary.indexOf(lastItem);
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

// opens modal
addBook.addEventListener('click', () => {
  modal.classList.toggle('show');
});

// close modal by clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// get user form input
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formAuthor = document.getElementById('author');
  const formTitle = document.getElementById('title');
  const formPages = document.getElementById('pages');
  let formStatus = document.getElementsByName('status');

  formStatus = Array.from(formStatus);
  formStatus.forEach((input) => {
    const eachInput = input;
    if (eachInput.checked) {
      formStatus = eachInput.value;
    }
  });

  addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formStatus);
  showBookInLibrary();

  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
  closeModal();
});

// close modal on esc key pressed
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('show')) {
      closeModal();
    }
  }
});

closeModalBtn.addEventListener('click', closeModal);
