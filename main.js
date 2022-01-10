let display = document.querySelector(".book-display");

let bookContainer = document.createElement("div");

let bookInfoForm = document.querySelector("#book-info-form");

let addBtn = document.querySelector("#add-btn");

let container = document.querySelector("main");

let submitBtn = document.createElement("button");

let data = [];

let titleInput = document.createElement("input");

let descriptionInput = document.createElement("input");

let authorInput = document.createElement("input");

let pagesInput = document.createElement("input");

let titleText = document.createElement("h3");

let authorText = document.createElement("h3");

let pagesText = document.createElement("h3");

let descriptionText = document.createElement("h3");

bookContainer.classList.add("book_container");

bookContainer.innerHTML = "";

let myLibrary = [];

let body = document.querySelector("body");

// Display a hlep message if there are no books in the library

function Book(title, author, desc, pages, read) {
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.pages = pages;
    this.read = read;
}

function error() {
    body.classList.add("error");
}

function createForm() {
    container.style.display = "none";
    bookInfoForm.style.display = "block";
    let bookInfoFormTitles = document.createElement("div");
    let bookInfoFormInputs = document.createElement("div");
    let formTextSection = document.createElement("div");
    formTextSection.classList.add("form-section");
    let formSubmitSection = document.createElement("div");
    formSubmitSection.classList.add("form-section");
    bookInfoFormTitles.classList.add("form-titles");
    bookInfoFormInputs.classList.add("form-inputs");
    bookInfoForm.appendChild(formTextSection);
    bookInfoForm.appendChild(formSubmitSection);
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    bookInfoFormInputs.appendChild(titleInput);
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    bookInfoFormInputs.appendChild(descriptionInput);
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("name", "author");
    bookInfoFormInputs.appendChild(authorInput);
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("name", "pages");
    bookInfoFormInputs.appendChild(pagesInput);
    titleText.textContent = "Title";
    descriptionText.textContent = "Description";
    authorText.textContent = "Author";
    pagesText.textContent = "Pages";
    bookInfoFormTitles.appendChild(titleText);
    bookInfoFormTitles.appendChild(descriptionText);
    bookInfoFormTitles.appendChild(authorText);
    bookInfoFormTitles.appendChild(pagesText);
    formTextSection.appendChild(bookInfoFormTitles);
    formTextSection.appendChild(bookInfoFormInputs);
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    formSubmitSection.appendChild(submitBtn);
}

function displayBooks() {
    display.textContent = "";
    myLibrary.forEach(function (book) {
        let bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");
        let title = document.createElement("h2");
        title.textContent = book.title;
        let description = document.createElement("p");
        description.textContent = book.desc;
        let deleteBtn = document.createElement("button");
        deleteBtn.id = "small-button";
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", function () {
            display.removeChild(bookContainer);
            myLibrary.splice(book.indexOf(book));
        });
        let readBtn = document.createElement("button");
        readBtn.class = "small-button";
        bookContainer.appendChild(title);
        bookContainer.appendChild(description);
        bookContainer.appendChild(deleteBtn);
        display.appendChild(bookContainer);
    });
}

addBtn.addEventListener("click", function () {
    createForm();
});

submitBtn.addEventListener("click", function () {
    if (
        titleInput.value == "" ||
        descriptionInput.value == "" ||
        authorInput.value == "" ||
        pagesInput.value == ""
    ) {
        return;
    }
    let book = new Book(
        titleInput.value,
        descriptionInput.value,
        authorInput.value,
        pagesInput.value,
        false
    );
    console.log(book);
    myLibrary.push(book);
    displayBooks();
    titleInput.value = "";
    descriptionInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    bookInfoForm.style.display = "none";
    container.style.display = "flex";
});
