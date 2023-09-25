function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var rendition;
document.getElementById('file-input').addEventListener('change', function(event) {
    if (rendition != null) rendition.destroy();
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
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
    };
    reader.readAsArrayBuffer(file);
});


