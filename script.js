
let currentPlayer = 'X';
let arr = Array(9).fill(null);

function checkwinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) || // Row 1
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) || // Row 2
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) || // Row 3
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) || // Column 1
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) || // Column 2
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) || // Column 3
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) || // Diagonal 1
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])    // Diagonal 2
    ) {
        document.write(`Winner is ${currentPlayer}`);
        return true;
    }
    if (!arr.some(e => e === null)) {
        document.write(`Draw !!!`);
        return true;
    }
    return false;
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    
    // Check if the game is won or drawn
    if (checkwinner()) return;

    // Switch player after the move
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}
