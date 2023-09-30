var newDivHeader = document.createElement('div');
var newDivFooter = document.createElement('div');

newDivHeader.innerHTML = `
<header>
    <div class="left">
        <a href="index.html"><img src="logo-white.svg" title="Imaginary Tales" height="80" /></a>
    </div>
    <div class="search-bar">
        <input type="text" id="search-box" placeholder="Search..."/>
        <button id="search-button"><i class="nf nf-fa-search"></i></button>
    </div>
    <div class="right">
        <nav>
            <ul>
                <a href="index.html">Home</a>
                <a href="list.html">Novel</a>
                <a href="info.html">Informasi</a>
            </ul>
        </nav>
    </div>
</header>
`;

newDivFooter.innerHTML = `
<p><i class="nf nf-md-github"></i> <a href="https://github.com/commrade-goad/imaginary-tales">Source Code</a></p>
`;


var containerElementHeader = document.getElementById('top-bar'); // Replace 'container' with the ID of the container element you want to use
var containerElementFooter = document.getElementById('bottom-bar'); // Replace 'container' with the ID of the container element you want to use

containerElementHeader.appendChild(newDivHeader);
containerElementFooter.appendChild(newDivFooter);
