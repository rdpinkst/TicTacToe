const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    let boardGame = document.querySelectorAll('.boardSquare');

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
                board.splice(boards.dataset.index, 1, "x");
                console.log(board);
                clearBoard();
                renderBoard();  
            })
        }
       
    }
    return {
        renderBoard,
        playerClick,
       
    }
})();

const Player = function (name, symbol) {
    const getName = () => name;
    const getSymbol = () => symbol;


}
