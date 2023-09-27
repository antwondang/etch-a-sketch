let color = 'black'

function gridSize(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


    let amount = size * size;    
    for (let i = 0; i < amount; i++) {
     let gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', colorSquare);
        gridElement.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", gridElement);
  }
}

gridSize(16);


function clearClick(){
    let board = document.querySelector('.board');
    let square = document.querySelectorAll('div');
    square.forEach((div) => div.style.backgroundColor = 'white');
}

function changeSize(input){
    if (input >= 2 && input <= 64){
        gridSize(input);
    } else {
        alert('Invalid input, please use a different number.')
    }
}

function colorSquare(){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}


function changeColor(choice){
    color = choice
}
