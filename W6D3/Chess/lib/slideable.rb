
module Slideable

  HORIZONTAL_DIRS = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  DIAGONAL_DIRS = [[1, 1], [-1, -1], [1, -1], [-1, 1]]

  def horizontal_dirs 
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    possible_moves = []
    move_dirs.each do |dir|
      x, y = dir
      possible_moves.concat(grow_unblocked_moves_in_dir(x, y))
    end
    possible_moves
  end
  
  def move_dirs
    diagonal_dirs + horizontal_dirs
    
  end

  private
  def grow_unblocked_moves_in_dir(dx, dy)
    row, col = @pos
    pos = row, col
    directional_moves = []
    while self[pos].is_a?(NullPiece)
      directional_moves << pos
      row += dx
      col += dy
    end
    directional_moves
  end
end