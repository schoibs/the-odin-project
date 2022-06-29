
// making the 16 x 16 (default) grid 
const gridContainer = document.querySelector('.grid');

for (let i=0; i<16; i++){

    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');

    for (let j=0; j<16; j++){
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');

        lineDiv.appendChild(cellDiv);
    }

    gridContainer.appendChild(lineDiv);
}

// making the grid size depends on slider value
const gridSlider = document.querySelector('.grid-slider');

gridSlider.addEventListener('mouseup', e => {
    console.log("value of " + e.target.value);
});

// making the grid cells background colour match the colour picker value
const colorInput = document.querySelector('.color-picker');
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', e => {
        e.target.style.backgroundColor = colorInput.value;
    });
});

// making the eraser button
const eraserBtn = document.querySelector('.eraser-btn');

eraserBtn.addEventListener('click', e => {
    
    if (e.target.style.backgroundColor === 'white' || e.target.style.backgroundColor === ''){
        e.target.style.backgroundColor = 'rgb(255, 168, 168)';

        cells.forEach((cell) => {
            cell.addEventListener('mouseenter', e => {
                e.target.style.backgroundColor = 'white';
            });
        });
        
    } else {
        e.target.style.backgroundColor = 'white';

        cells.forEach((cell) => {
            cell.addEventListener('mouseenter', e => {
                e.target.style.backgroundColor = colorInput.value;
            });
        });
    }
    
});

// making the reset button
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', e => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});