const gameBoard = (function() {
    const board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

    function renderBoard(){
        let boardGame = document.querySelectorAll('.boardSquare');

        for(let square of boardGame){
            let symbol = this.createElement('p');
            symbol.innerText = board[this.dataIndex];
            boardGame.appendChild(symbol);
        }
        console.log(board);
    }
    return{
        renderBoard
    }
})();
