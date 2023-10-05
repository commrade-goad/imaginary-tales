var newDivGrid = document.createElement('div');

newDivGrid.innerHTML = `
<div class="grid-parents">
    <div class="grid-inner"></div>
    <div class="grid-inner"></div>
    <div class="grid-inner"></div>
    <div class="grid-inner"></div>
</div>
`;

var containerElementGrid = document.getElementById('grid-outter');
containerElementGrid.appendChild(newDivGrid);
