// Selectors

var tableRow = document.getElementsByTagName('tr')
var tableCell = document.getElementsByTagName('td')
var tableSlot = document.querySelector('.slot')
const playerTurn = document.querySelector('.player-turn')
const reset = document.querySelector('.rest')

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};

// while (!player1) {
//     var player1 = prompt('Player One: Enter your name. You will be red.');
// };
// var player1Color = 'red';

// while (!player2) {
//     var player2 = prompt('Player Two: Enter your name. You will be yellow.');
// };
// var player2Color = 'yellow';

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

//Function