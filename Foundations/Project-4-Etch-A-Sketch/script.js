const container = document.querySelector('.container');

for (let i=0; i<16; i++){

    const lineDiv = document.createElement('div');
    lineDiv.setAttribute('style', 'display: flex; ')

    for (let j=0; j<16; j++){
        const cellDiv = document.createElement('div');
        cellDiv.textContent = 'cell';
        lineDiv.appendChild(cellDiv);
    }

    container.appendChild(lineDiv);
}