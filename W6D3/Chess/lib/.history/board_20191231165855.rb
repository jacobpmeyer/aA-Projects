require_relative "piece"

class Board
  def initialize
    @board = Array.new(8) { |i| Array.new(8) { |j| 
      Piece.new(i, j)
    } }
  end
end