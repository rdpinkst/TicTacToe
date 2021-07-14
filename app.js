const gameBoard = (function () {
    const board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

    function renderBoard() {
        let boardGame = document.querySelectorAll('.boardSquare');
        for (let boards of boardGame) {
            let p = document.createElement('p');
            p.innerText = board[boards.dataset.index];
            boards.appendChild(p);
        }
    }
    return {
        renderBoard,
    }
})();
