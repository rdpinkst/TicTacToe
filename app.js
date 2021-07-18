const player = function (name, symbol) {

    return { name, symbol };
}


const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    const container = document.querySelector('#container');
    let boardGame = document.querySelectorAll('.boardSquare');
    let count = 0;
    let winner = '';

    const player1 = player('Player 1', 'x');
    const player2 = player('Player 2', 'o');

    function renderBoard() {
        for (let boards of boardGame) {
            let image = document.createElement('img');

            if (board[boards.dataset.index] === 'x') {
                image.src = 'close.png';
            }
            else if (board[boards.dataset.index] === 'o') {
                image.src = 'o-symbol.png';
            }

            boards.appendChild(image);
        }
    }
    function playerWins(winner) {
        let p = document.createElement('p');
        p.setAttribute('id', 'winningPlayer');
        p.innerText = `Congrats ${winner} wins!`;
        if (winner === 'draw') {
            p.innerText = `It's a draw, play again.`
        }
        container.appendChild(p);
    }
    function clearPlayerWins() {
        let winPlayer = document.querySelector('#winningPlayer');
        winPlayer.parentNode.removeChild(winPlayer);
    }
    function clearBoard() {
        for (let boards of boardGame) {
            while (boards.firstChild) {
                boards.removeChild(boards.firstChild);
            }
        }
    }

    function playerClick() {
        if (winner === '') {
            for (let boards of boardGame) {
                boards.addEventListener('click', addSymbols)
            }
        }
    }
    function addSymbols(e) {
        let index = e.target.dataset.index;
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
            removeClick();
        }

    }
    function removeClick(e) {
        if (winner !== '') {
            for (let boards of boardGame) {
                boards.removeEventListener('click', addSymbols);
            }
        }
    }

    function checkWinner(count) {

        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
            console.log(`${board[0]} wins!`);
            winner = board[0];
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
            console.log(`${board[3]} wins!`);
            winner = board[3];
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
            console.log(`${board[6]} wins!`);
            winner = board[6];
        }
        else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
            console.log(`${board[0]} wins!`);
            winner = board[0];
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
            console.log(`${board[1]} wins!`);
            winner = board[1];
        }
        else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
            console.log(`${board[2]} wins!`);
            winner = board[2];
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
            console.log(`${board[0]} wins!`);
            winner = board[0];
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
            console.log(`${board[2]} wins!`);
            winner = board[2];
        }
        else if (count === 9) {
            console.log('No winner')
        }

        if (winner === player1.symbol) {
            winner = player1.name;
            playerWins(winner);
        }
        else if (winner === player2.symbol) {
            winner = player2.name;
            playerWins(winner);
        }
        else if (count === 9) {
            winner = 'draw';
            playerWins(winner);
        }

    }
    function restartGame() {
        const restart = document.querySelector('#restartGame');


        restart.addEventListener('mousedown', function (e) {
            clearBoard();
            for (let i = 0; i < board.length; i++) {
                board[i] = '';
            }

            if (winner !== '') {
                clearPlayerWins();
            }
            winner = '';
            count = 0;
            playerClick();
            e.stopPropagation();
            e.preventDefault();
        })

    }
    playerClick();
    restartGame();

    return {
        checkWinner,


    }
})();




