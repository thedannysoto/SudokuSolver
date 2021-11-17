// variable to fill empty spaces
const e = null;

// empty board
const emptyBoard = [
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