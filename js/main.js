// Selectors
var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const reset = document.querySelector('.rest');

for (i = 0; i < tableCell.length; i ++){
    tableCell[i].addEventListener('click', (event) => {
        console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
    });
};

// Game logic Lets Player state name pre chosen color selection for players
while (!player1) {
    var player1 = window.prompt('Player One: Enter your name. You will be red.');
};
var player1Color = 'red';

while (!player2) {
    var player2 = window.prompt('Player Two: Enter your name. You will be yellow.');
};
var player2Color = 'yellow';

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

// Go through each slot/cell of game make sure they are white and add eventListener
Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

//Function to get peaces on the board
function changeColor(event) {
    let column = event.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (tableRow[i].children[column].style.backgroundColor == 'white') {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1) {
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2())  {
                    playerTurn.textContent = `${player1} wins!!!`;
                    playerTurn.style.color = player1Color;
                    return (alert(`${player1} WINS!!!!!`));
                } else if (drawCheck()) {
                    playerTurn.textContent = 'Game is a draw!';
                    return alert('DRAW');
                } else {
                    playerTurn.textContent = `${player2}'s turn!`
                    return currentPlayer = 2
                }

            } else {
                    row[0].style.backgroundColor = player2Color;
                    playerTurn.textContent = `${player1}'s turn!`;
                    if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2())  {
                        playerTurn.textContent = `${player2} wins!!!`;
                        playerTurn.style.color = player2Color;
                        return (alert(`${player2} WINS!!!!!`));
                    } else if (drawCheck()) {
                        playerTurn.textContent = 'Game is a draw!';
                        return alert('DRAW');
                    } else {
                        playerTurn.textContent = `${player2}'s turn!`;
                        return currentPlayer = 1; 
                    }
            
            }       
            
        }
    }
   
}

// Funtion to declare who wins
function colorMatchCheck(one, two, three, four) {
    return (one == two && one === three && one === four && one !== 'white');
}

function horizontalCheck() {
    for (let row = 0; row < tableRow.length; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row].children[col+1].style.backgroundColor, tableRow[row].children[col +2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)) {
                return true;
            }
        }

    }
}

function verticalCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor, tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor)) {
            return true;
            }
        }
    }

}

function diagonalCheck1() {
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor, tableRow[row+2].children[col+2].style.backgroundColor, tableRow[row+3].children[col+3].style.backgroundColor,)) {
            return true
            }
        } 
    }
}

function diagonalCheck2() {
    for (let col = 0; col < 4; col++) {
        for (let row = 5; row > 2; row--) {
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor, tableRow[row-2].children[col+2].style.backgroundColor, tableRow[row-3].children[col+3].style.backgroundColor,)) {
            return true
            }
        } 
    }
}

function drawCheck() {
    let fullSlot = []
    for (let i =0; i < tableCell.length; i++) {
        if (tableCell[i].style.backgroundColor !== 'white') {
            fullSlot.push(tableCell[i]);
        }
    }
    if (fullSlot.length === tableCell.length.length) {
            return true;
    
    }
}
