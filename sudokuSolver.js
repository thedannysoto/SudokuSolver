// variable to fill empty spaces
const e = null;

// empty grid
const emptyGrid = [
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e],
    [e, e, e, e, e, e, e, e, e]
];

function isSolved(grid) {
    // loop through each square and check if all numbers are filled in
    // returns boolean
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (grid[x][y] == null) {
                return false;
            }
        }
    }
    return true;
}


function decode (grid) {
    // first check for solved grid
    if (isSolved(grid)) {
        return grid;
    } else {
        // Find empty square and test numbers 1-9
        const options = nextOptions(grid);
    }
}

function nextOptions (grid) {
    let testGrids = [];

}

function nextEmptySquare (grid) {
    // Loop through grid and return coordinates of next empty square
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (grid[x][y] == null) {
                return [x, y];
            }
        }
    }
}
