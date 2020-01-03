require_relative "piece"

class Board
  def initialize
    @board = Array.new(8) { |i| Array.new(8) { |j| 
      Piece.new(i, j)
    } }
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece here" if @board([start_pos])
  end
end