require "byebug"
require_relative "piece"

class Board
  attr_reader :board

  def initialize
    @board = Array.new
    fill_board
  end

  def fill_board
    @board.concat(Array.new(8) { |i| 
      Array.new(8) { |j| 
        if (2..5).include?(i)
          NullPiece.instance
        else
          Knights.new(:W, self, [i,j])
        end
      } 
    })
  end

  def [](pos)
    x, y = pos
    @board[x][y]
  end

  def []=(pos, value)
    x, y = pos
    @board[x][y] = value
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece here" unless self[start_pos].is_a?(Piece)
    # raise "Illegal move detected" unless self[start_pos].moves.include?(end_pos)
    
    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
  end

  def valid_pos?(pos)
    return false unless pos.all? { |ele| ele >= 0 && ele < 7 }
    true
  end
end
