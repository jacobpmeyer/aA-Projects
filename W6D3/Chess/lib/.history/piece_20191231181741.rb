require 'singleton'

class Piece
  def initialize(num1, num2)
    # return NullPiece.instance if (2..5).include?(num1)
  end

  def legal_moves
    moves = []
    8.times { |i| 8.times { |j| moves << [i, j] } }
    moves
  end
end

class NullPiece < Piece
  include Singleton

  def initialize

  end
end

