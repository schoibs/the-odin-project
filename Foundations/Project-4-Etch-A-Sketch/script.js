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

const colorInput = document.querySelector('.color-picker');
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', e => {
        e.target.style.backgroundColor = colorInput.value;
    });
});


const eraserBtn = document.querySelector('.eraser-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const resetBtn = document.querySelector('.reset-btn');

eraserBtn.addEventListener('click', e => {
    e.target.style.backgroundColor = 'rgb(255, 168, 168)';

});

rainbowBtn.addEventListener('click', e => {
    
});

resetBtn.addEventListener('click', e => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});