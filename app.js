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
                console.log(count);
                console.log(board);
                clearBoard();
                renderBoard();
                checkWinner();

            })
        }
    }
    function checkWinner() {   
        let count = {}; 
          
        for (let i = 0; i < 2; i++) {
            count[board[i]] = (count[board[i]] || 0) + 1;
        }
        console.log(count);
        
    }
    return {
        renderBoard,
        playerClick,

    }
})();




