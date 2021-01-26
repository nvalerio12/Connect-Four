// Selectors

var tableRow = document.querySelectorAll('tr');
var tableCell = document.querySelectorAll('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.playerturn');
const reset = document.querySelector('.reset');

for (let i = 0; 0 < tableCell.lengt; i++) {
    tableCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
    })
}

while (!player1) {
    var player1 = prompt(`Player One: Enter Your Name. You will be RED.`);
}

player1Color = 'red'

while (!player2) {
    var player2 = prompt(`Player Two: Enter Your Name. You will be YELLOW.`);
}

player2Color = 'yellow'

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
})

function changeColor(e) {
    let column = e.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (tableRow[i].children[column].style.backgroundColor == 'white') {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1) {
                row(0).style.backgroundColor = player1Color
            }
        }
    }
}

