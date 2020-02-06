let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = Array.from({ length: 8 }, () => Array.from({ length: 8 }));
  for (let i = 0; i < 8; i++) {
    for (let j = 0; i < 8; i++) {
      grid[i][j] = new Piece("null");
    }
    
  }
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();

}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error('Not valid pos!');
  }

  return this.grid[x][y]
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if (this.validMoves(color).length === 0) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {

  [x, y] = pos

  if (this.isOccupied(pos) === true) {
    return false;
  }
  if (this.grid[x][y].oppColor() !== color) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  [x, y] = pos
  if (this.grid[x][y] === undefined) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (this.validMoves("white").length === 0 && this.validMoves("black" === 0)) {
    return true;
  }
  return false;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  [x, y] = pos
  if (x > 7 || y > 7 || x < 0 || y < 0 ) {
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let nextPos = (pos[0] + dir[0], pos[1] + dir[1])
  if (!board.isValidPos(nextPos) || !board.isOccupied(nextPos)) {
    return null;
  }
  [x, y] = nextPos
  piecesToFlip.push(nextPos)
  if (board.grid[x][y].color === color) {
    return piecesToFlip
  } else {
    return _positionsToFlip(board, nextPos, color, dir, piecesToFlip)
    
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMoves.includes(pos)) {
    throw new Error("Invalid Move");
  }
  let [x, y] = pos
  this.grid[x][y].flip()
  Board.DIRS.forEach(direction => {
    let needToFlip = [];
    let thisBoard = this;
    needToFlip.push(_positionsToFlip(thisBoard, pos, color, direction, []));
    needToFlip.forEach(pos => {
      let [u, l] = pos
      this.grid[u][l].flip();
    })
  })
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  
  for (let i = 0; i < 8; i++) {
    let stringPos = [];
    for (let j = 0; j < 8; j++) {
      stringPos.push(this.grid[i][j].toString())
    }
    let joined = stringPos.join(" | ")
    console.log(joined)
  }

};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  // let posArray = []
  let val = []
  Board.DIRS.forEach(dir => {
    let adjacentPos = [];
    adjacentPos.push(dir[0] + pos[0]);
    adjacentPos.push(dir[1] + pos[1]);
    if (this.isOccupied(adjacentPos) && !this.isMine(adjacentPos, color)) {
      // posArray.push(adjacentPos)
      val = _positionsToFlip(this, adjacentPos, color, dir, [])
    }
    if (val.length > 0 && val[-1] !== null) {
      /* I am not really sure what to do here, so I am saving this line in case
      posArray.push(val[0]) */
      return pos;
    }
  });
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let movesArr = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let gPos = this.grid[i][j]
        if (this.validMove(gPos)) {
          movesArr.push(gPos)
        }
      }
    }
  return movesArr;
};

module.exports = Board;


// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//       if (grid[i][j] === undefined) {
//         Board.DIRS.forEach(pos => {
//           [x, y] = pos
//           if (grid[x][y] !== undefined && grid[x][y].color !== color) {
//             while ()
//           }
//         }
//       }
//     }
//   }


function checking(pos) {
  if (board.getPiece(pos)) {
    return true;
  }
  return false;
}

Board.prototype.checking(pos) {
  if this.getPiece(pos)
}