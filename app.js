const player = function (name, symbol) {
    return { name, symbol };
}


const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    let boardGame = document.querySelectorAll('.boardSquare');

    const player1 = player('Player 1', 'x');
    const player2 = player('Player 2', 'o');

    function renderBoard() {
        for (let boards of boardGame) {
            let p = document.createElement('p');
            p.innerText = board[boards.dataset.index];
            boards.appendChild(p);
        }
    }
    function clearBoard() {
        for (let boards of boardGame) {
            while (boards.firstChild) {
                boards.removeChild(boards.firstChild);
            }
        }
    }
    function playerClick() {
        let count = 0;
        for (let boards of boardGame) {
            boards.addEventListener('click', (e) => {
                let index = boards.dataset.index;
                if (count % 2 === 0 && board[index] === '') {
                    board.splice(index, 1, player1.symbol);
                    count++;
                }
                else if (count % 2 === 1 && board[index] === '') {
                    board.splice(index, 1, player2.symbol);
                    count++;
                }
                clearBoard();
                renderBoard();

            })
        }
    }
    function checkWinner(index, count) {
        let countRow = 0;
        let countColumn = 0;
        let countDiagonal = 0;



        if (index % 2 === 0 && board[index] === 'x') {
            countRow += 1;
            countColumn += 1;
            countDiagonal += 1;
        }
        else if (index % 2 === 0 && board[index] === 'o') {
            countRow--;
            countColumn--;
            countDiagonal--;
        }
        else if (index % 2 === 1 && board[index] === 'x') {
            countRow++;
            countColumn++;
        }
        else if (index % 2 === 1 && board[index] === 'o') {
            countRow--;
            countColumn--;
        }


        console.log(countColumn);
        console.log(countRow);
        console.log(countDiagonal);


        if (countRow === 3 || countColumn === 3 || countDiagonal === 3) {
            console.log('X is the winner');
        }
        else if (countRow === -3 || countColumn === -3 || countDiagonal === -3) {
            console.log('O is the winner');
        }
        else if (count === 9) {
            console.log(`It's a draw!`);
        }

    }
    return {
        renderBoard,
        playerClick,
        checkWinner,

    }
})();




