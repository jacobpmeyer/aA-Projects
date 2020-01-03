module Slideable
  HORIZONTAL_DIRS = [[0,1],[0,-1],[-1,0],[1,0]]
  DIAGONAL_DIRS = [[1,1],[-1,-1],[1,-1],[-1,1]]

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    positions = []

    move_dirs.each { |dir|
      x,y = dir
      positions.concat(grow_unblocked_moves_in_dir(x,y))
    }

    positions
  end

  private
  def move_dirs
    self.horizontal_dirs + self.diagonal_dirs
  end

  def grow_unblocked_moves_in_dir(dx, dy)
    row, col = @pos
    pos = [row+dx, col+dy]
    moves = []
    
    while @board[pos] == NullPiece.instance
      moves << pos
      pos = [pos[0]+dx, pos[1]+dy]
    end

    moves
  end
end