function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayBook(bookData) {
    if (bookData == null) {
        bookData = "https://s3.amazonaws.com/epubjs/books/alice.epub";
    }
    var book = ePub(bookData);
    rendition = book.renderTo("reader", { method: "default", allowScriptedContent: true });
    rendition.display();

    sleep(500);
    document.addEventListener('keypress', function(event) {
        if (event.key === 'ArrowLeft') {
            rendition.prev();
        } else if (event.key === 'ArrowRight') {
            rendition.next();
        }
    });
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

var rendition;
var bookData = null;
displayBook(bookData);
document.getElementById('file-input').addEventListener('change', function(event) {
    if (rendition != null) rendition.destroy();
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        bookData = event.target.result;
        displayBook(bookData);
    };
    /* reader.onload = function(event) {
        var bookData = event.target.result;
        var book = ePub(bookData);
        rendition = book.renderTo("reader", { method: "default", allowScriptedContent: true });
        rendition.display();

        sleep(500);
        document.addEventListener('keypress', function(event) {
            if (event.key === 'ArrowLeft') {
                rendition.prev();
            } else if (event.key === 'ArrowRight') {
                rendition.next();
            }
        });
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
    }; */
    reader.readAsArrayBuffer(file);
});
