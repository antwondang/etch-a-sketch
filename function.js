
function gridSize(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i < 256; i++) {
     let gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", gridElement);
  }
}

