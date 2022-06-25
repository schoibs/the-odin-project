const container = document.querySelector('.container');

for (let i=0; i<16; i++){

    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');

    for (let j=0; j<16; j++){
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');

        lineDiv.appendChild(cellDiv);
    }

    container.appendChild(lineDiv);
}

const colorInput = document.querySelector('input');
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', e => {
        cell.style.backgroundColor = colorInput.value;
    });
});

