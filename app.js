const player = function (name, symbol) {
    return { name, symbol };
}


const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    let boardGame = document.querySelectorAll('.boardSquare');
    let winner = false;
    let count = 0;

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
                if (count > 4) {
                    checkWinner(count);
                }
                console.log(count);
            })
        }
    }
    function checkWinner(count) {
        
            if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
                console.log(`${board[0]} wins!`);
                winner = true;
            }
            else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
                console.log(`${board[3]} wins!`);
                winner = true;
            }
            else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
                console.log(`${board[6]} wins!`);
                winner = true;
            }
            else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
                console.log(`${board[0]} wins!`);
                winner = true;
            }
            else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
                console.log(`${board[1]} wins!`);
                winner = true;
            }
            else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
                console.log(`${board[2]} wins!`);
                winner = true;
            }
            else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
                console.log(`${board[0]} wins!`);
                winner = true;
            }
            else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
                console.log(`${board[2]} wins!`);
                winner = true;
            }
            else if (count === 9) {
                console.log(`It's a draw!`);
            }
        
        restartGame();
    }
    function restartGame() {
        const restart = document.querySelector('#restartGame');

        restart.addEventListener('click', function (e) {
            clearBoard();
            for (let i = 0; i < board.length; i++) {
                board[i] = '';
            }
            winner = false;
            count = 0;

        })
    }
    return {
        renderBoard,
        playerClick,
        checkWinner,
        restartGame,

    }
})();




