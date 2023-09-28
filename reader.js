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
        // bookData = "https://s3.amazonaws.com/epubjs/books/alice.epub";
        bookData = "https://s3.amazonaws.com/moby-dick/";
    }
    var book = ePub(bookData);
    rendition = book.renderTo("reader", { width: 600, height: 600, allowScriptedContent: true });
    book.rendition.themes.register("black",
        {
            "body": {
                "color": "white",
                "font-family": "Arial, Helvetica, sans-serif",
                // "font-size": "12pt",
            },
            "a": {
                "color": "white !important",
                "text-decoration": "underline !important",
            }
        });
    rendition.themes.select("black");
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