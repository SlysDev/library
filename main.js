let display = document.querySelector(".book-display");

let bookContainer = document.createElement("div");

let formContainer = document.querySelector(".form-container");

let addBtn = document.querySelector("#add-btn");

let container = document.querySelector("main");

bookContainer.classList.add("book_container");

bookContainer.innerHTML = "";

let myLibrary = [];

function Book(title, author, desc, pages, read) {
  this.title = title;
  this.author = author;
  this.desc = desc;
  this.pages = pages;
  this.read = read;
}

function createForm() {
    formContainer.style.display = 'flex';
  let bookForm = document.createElement("form");
    let bookFormTitles = document.createElement('div');
    let bookFormInputs = document.createElement('div');
    bookForm.classList.add('book-form')
    bookFormTitles.classList.add('book-form-section');
    bookFormInputs.classList.add('book-form-section');
    formContainer.appendChild(bookForm);

  let titleInput= document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  bookFormInputs.appendChild(titleInput);
  let descriptionInput= document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  bookFormInputs.appendChild(descriptionInput);
  let authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("name", "author");
  bookFormInputs.appendChild(authorInput)
  let pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "text");
  pagesInput.setAttribute("name", "pages");
  bookFormInputs.appendChild(pagesInput);
    let titleText = document.createElement('h2');
    titleText.textContent = "Title";
    let descriptionText = document.createElement('h2');
    descriptionText.textContent = "Description";
    let authorText = document.createElement('h2');
    authorText.textContent = "Author";
    let pagesText = document.createElement('h2');
    pagesText.textContent = "Pages";
    bookFormTitles.appendChild(titleText);
    bookFormTitles.appendChild(descriptionText);
    bookFormTitles.appendChild(authorText);
    bookFormTitles.appendChild(pagesText);

    bookForm.appendChild(bookFormTitles);
    bookForm.appendChild(bookFormInputs);
    let submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    formContainer.appendChild(submitBtn);
}

function logBook() {
  createForm();
  container.style.display = "none";
}

function processBook() {
    container.style.display = "block";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book_container");
    let title = document.createElement("h2");
    title.textContent = book.title;
    let description = document.createElement("p");
    description.textContent = book.desc;
  });
}

addBtn.addEventListener("click", function () {
  logBook();
});


