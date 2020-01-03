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
          Bishop.new(:W, self, [i,j])
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
    # start_pos = [1,2]
    # debugger
    raise "There is no piece here" unless self[start_pos].is_a?(Piece)
    unless self[start_pos].legal_moves.include?(end_pos)
      raise "Illegal move detected" 
    end


    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
  end

  def valid_position(pos)
    # x,y = pos
    false unless pos.all? { |ele| ele < 0 || ele > 7 }
    true
  end
end

# b = Board.new
