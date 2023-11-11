import { readJson } from "./Book.js";
const currentURL = window.location.href;
const url = new URL(currentURL);
const bookURL = url.searchParams.get("book");
const container = document.getElementById("content");

readJson("data/book.json").then((bookData) => {
  const currentBook = bookData[bookURL];
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("flexbox");
  bookDiv.innerHTML = `
<div class="img">
    <img src="${currentBook.image}" />
</div>
<div class="info">
    <div class="title">${currentBook.name}</div>
    <div class="author"><i>${currentBook.author}</i></div>
    <br />
    <div class="synopsys">
        ${currentBook.synopsys}
    </div>
    <br />
    <div class="genre">
        ${currentBook.tag
          .map((tag) => `<div class="genre-box">${tag}</div>`)
          .join("")}
    </div>
    <br />
    <br />
    <div class="read-button">
        <a href="reader.html?book=${currentBook.path}" class="read-link">
            Read this book
        </a>
    </div>
</div>
`;
  container.appendChild(bookDiv);
});
