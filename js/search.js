import { readJson } from "./Book.js";

const searchInput = document.getElementById("book-search");
const container = document.getElementById("content-grid");

searchInput.addEventListener("keydown", function (e) {
  if (searchInput.value != null || searchInput.value != "") {
    if (e.key === "Enter") {
      performSearch();
    }
  }
});

function performSearch() {
  const searchInp = document.getElementById("book-search").value;
  container.innerHTML = "";

  readJson("data/book.json").then((bookData) => {
    const bookDataLen = bookData.length;
    for (let i = 0; i < bookDataLen; i++) {
      const currentBook = bookData[i];
      const currentBookName = currentBook.name;
      if (currentBookName.toLowerCase().includes(searchInp.toLowerCase())) {
        console.log(currentBook);

        const newDivGrid = document.createElement("li");
        newDivGrid.classList.add("flexbox-li");
        newDivGrid.innerHTML = `
                    <a href="novel.html?book=${i}">
                        <div class="image">
                            <img src="${
                              currentBook.image
                            }" alt="Image" class="imge" />
                        </div>
                        <div class="title">
                            ${currentBook.name} 
                        </div>
                        <div class="author">
                            <i>
                            ${currentBook.author}
                            </i>
                        </div>
                        <div class="genre">
                            ${currentBook.tag
                              .map(
                                (tag) => `<div class="genre-box">${tag}</div>`,
                              )
                              .join("")}
                        </div>
                    </a>
                `;

        container.appendChild(newDivGrid);
      }
    }
  });
}
