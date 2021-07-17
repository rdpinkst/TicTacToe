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
                if(count > 4){
                    checkWinner(count);
                }
            })
        }
    }
    function checkWinner(count) {
        if(board[0] === board[1] && board[1] === board[2]){
            console.log(`${board[0]} wins!`);
        }
        else if(board[3] === board[4] && board[4] === board[5]){
            console.log(`${board[3]} wins!`);
        }
        else if(board[6] === board[7] && board[7] === board[8]){
            console.log(`${board[6]} wins!`);
        }
        else if(board[0] === board[3] && board[3] === board[6]){
            console.log(`${board[0]} wins!`);
        }
        else if(board[1] === board[4] && board[4] === board[7]){
            console.log(`${board[1]} wins!`);
        }
        else if(board[2] === board[5] && board[5] === board[8]){
            console.log(`${board[2]} wins!`);
        }
        else if(board[0] === board[4] && board[4] === board[8]){
            console.log(`${board[0]} wins!`);
        }
        else if(board[2] === board[4] && board[4] === board[6]){
            console.log(`${board[2]} wins!`);
        }
        else if(count === 9){
            console.log(`It's a draw!`);
        }
           

    }
    return {
        renderBoard,
        playerClick,
        checkWinner,

    }
})();




