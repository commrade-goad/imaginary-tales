import { readJson } from "./Book.js";

const container = document.getElementById("content-grid");
readJson("data/book.json").then((bookData) => {
  const bookDataLen = bookData.length;
  for (let i = 0; i < bookDataLen; i++) {
    const currentBook = bookData[i];
    const newDivGrid = document.createElement("li");
    newDivGrid.classList.add("flexbox-li");
    newDivGrid.innerHTML = `
<!-- <a href="index.html?book=${currentBook.path}"> -->
<a href="novel.html?book=${i}">
    <div class="image">
        <img src="${currentBook.image}"
            alt="Image" class="imge" />
    </div>
    <div class="title">
        ${currentBook.name} 
    </div>
    <div class="author">
        ${currentBook.author}
    </div>
    <div class="genre">
        ${currentBook.tag
          .map((tag) => `<div class="genre-box">${tag}</div>`)
          .join("")}
    </div>
</a>
`;
    container.appendChild(newDivGrid);
  }
});
