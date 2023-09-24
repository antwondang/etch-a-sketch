
function gridSize(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


    let amount = size * size;    
    for (let i = 0; i < amount; i++) {
     let gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", gridElement);
  }
}

gridSize(16);

function changeSize(input){
    gridSize(input);
}