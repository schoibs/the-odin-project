const container = document.querySelector('.container');

for (let i=0; i<16; i++){

    const lineDiv = document.createElement('div');
    lineDiv.setAttribute('style', 'display: flex;')

    for (let j=0; j<16; j++){
        const cellDiv = document.createElement('div');
        cellDiv.setAttribute('style', 'height: 30px; width: 30px; border-style: solid; border-width: 1px;');

        lineDiv.appendChild(cellDiv);
    }

    container.appendChild(lineDiv);
}