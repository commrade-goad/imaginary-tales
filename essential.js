// Create a new div element
var newDivHeader = document.createElement('div');
var newDivFooter = document.createElement('div');

// Set the innerHTML of the new div to your HTML content
newDivHeader.innerHTML = `
    <div class="navigation">
        <ul class="ul-navigation">
            <div class="left">
                <!-- <h1 class="nama">Imaginary Tales</h1> -->
                <a href="index.html"><img src="logo-white.svg" title="Imaginary Tales" height="80" /></a>
            </div>
            <div class="search-bar">
                <input type="text" id="search-box" placeholder="Search..."/>
                <button id="search-button"><i class="nf nf-fa-search"></i></button>
            </div>
            <div class="right">
                <li class="li-navigation">
                    <a href="index.html">Home</a>
                </li>
                <li class="li-navigation">
                    <a href="list.html">Novel</a>
                </li>
                <li class="li-navigation">
                    <a href="info.html">Informasi</a>
                </li>
            </div>
        </ul>
    </div>
`;

newDivFooter.innerHTML = `
    <footer>
        <p><i class="nf nf-md-github"></i> <a href="https://github.com/commrade-goad/imaginary-tales">Source Code</a></p>
    </footer>
`;


// Get the element in the existing DOM where you want to insert the new content
var containerElementHeader = document.getElementById('top-bar'); // Replace 'container' with the ID of the container element you want to use
var containerElementFooter = document.getElementById('footer-bar'); // Replace 'container' with the ID of the container element you want to use

// Append the new div to the container element
containerElementHeader.appendChild(newDivHeader);
containerElementFooter.appendChild(newDivFooter);
