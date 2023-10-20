const container = document.getElementById('content-grid');

for (let i = 0; i < 10; i++){
    let bookName = "Buku " + i;
    const newDivGrid = document.createElement('li');
    newDivGrid.classList.add('flexbox-li');
    newDivGrid.innerHTML = `
<a href="index.html?book=https://s3.amazonaws.com/moby-dick/">
    <div class="image">
        <img src="https://millercooper.com/wp-content/uploads/2021/07/file-3.jpg"
            alt="Image" class="imge" />
    </div>
    <div class="title">
        ${bookName} 
    </div>
    <div class="author">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </div>
    <div class="genre">
        <div class="genre-box">WIP</div>
        <div class="genre-box">WIP</div>
        <div class="genre-box">WIP</div>
    </div>
</a>
`;
    container.appendChild(newDivGrid);
}
