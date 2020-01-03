require "byebug"
require_relative "piece"

class Board
  attr_reader :board

  def initialize
    @board = fill_board
    
    
  end

  def fill_board
    Array.new(8) { |i| 
      Array.new(8) { |j| 
        if (2..5).include?(i)
          nil
        else
          Piece.new(i, j)
        end
      } 
    }
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
    # start_pos = [1,2]
    # debugger
    raise "There is no piece here" if self[start_pos].is_a?(NullPiece)
    unless self[start_pos].legal_moves.include?(end_pos)
      raise "Illegal move detected" 
    end


    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
  end 
end

b = Board.new
