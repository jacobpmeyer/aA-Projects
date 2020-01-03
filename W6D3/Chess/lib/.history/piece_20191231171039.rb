require 'singleton'

class Piece
  def initialize(num1, num2)
    return NullPiece.instance if (2..5).include?(num1)
  end

  def legal_moves
    Array.new(8) { |i| Array.new(8) { |j| [i, j] } }
  end
end

class NullPiece < Piece
  include Singleton
end

