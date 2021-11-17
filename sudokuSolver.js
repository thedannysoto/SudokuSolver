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
        const validGrids = validateGrids(options);
    }
}

function nextOptions (grid) {
    let testGrids = [];
    const emptySquare = nextEmptySquare(grid);
    if (emptySquare != undefined) {
        const y = emptySquare[0];
        const x = emptySquare[1];
        // add numbers 1-9 to empty square and return grids for testing
        for (let i = 1; i < 10; i++) {
            let testGrid = [...grid];
            let row = [...testGrid[y]]
            row[x] = i;
            testGrid[y] = row;
            testGrids.push(testGrid);
        }
    }
    return testGrids;
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

function validateGrids(grids) {
    let possibleGrids = [];
    for (let x = 0; x < grids.length; x++) {
        if (validGrid(grids[x])) {
            possibleGrids.push(grids[x]);
        }
    }
    return possibleGrids;
}

function validGrid(grid) {
    // return boolean - checks for duplicate numbers
    return validRows && validColumns && validNines;
}
