// Selectors
var tableRow = document.getElementsByTagName('tr')
var tableCell = document.getElementsByTagName('td')
var tableSlot = document.querySelector('.slot')
const playerTurn = document.querySelector('.player-turn')
const reset = document.querySelector('.rest')

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (event) => {
        console.log(`${event.target.parentElement.rowIndex},${event.target.cellIndex}`)
    });
};

// Game logic Let Player state name pre chosen color selection for players
while (!player1) {
    var player1 = window.prompt('Player One: Enter your name. You will be red.');
};
var player1Color = 'red';

while (!player2) {
    var player2 = window.prompt('Player Two: Enter your name. You will be yellow.');
};
var player2Color = 'yellow';

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

//Function
function changeColor(event) {
    let column = event.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (tableRow[i].children[column].style.backgroundColor == 'white') {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1) {
                row[0].style.backgroundColor = player1Color;
                playerTurn.textContent = `${player2}'s turn!`
                return currentPlayer = 2
            } else {
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn!`
                return currentPlayer = 1; 
            }         
            
        }
    }
   
}
