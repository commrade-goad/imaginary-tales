var rendition;
var bookData;
var book;

displayBook(bookData);
document.getElementById('file-input').addEventListener('change', function(event) {
    if (rendition != null) rendition.destroy();
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        bookData = event.target.result;
        displayBook(bookData);
    };
    reader.readAsArrayBuffer(file);
});

function displayBook(bookData) {
    if (bookData == null) {
        bookData = "https://s3.amazonaws.com/epubjs/books/alice.epub";
    }
    var book = ePub(bookData);
    rendition = book.renderTo("reader", { width: 600, height: 600, allowScriptedContent: true });
    rendition.display();

    book.loaded.navigation.then(function(toc) {
        console.log("Table of Contents:");
        toc.forEach(function(item) {
            console.log(item.label, item.href);
            if (item.subitems) {
                item.subitems.forEach(function(subitem) {
                    console.log("  -", subitem.label, subitem.href);
                });
            }
        });
    });
}
