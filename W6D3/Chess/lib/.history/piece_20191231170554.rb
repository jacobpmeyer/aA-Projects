class Piece
  def initialize(num1, num2)
    return NullPiece.instance if (2..5).include?(num1)
  end
end

class NullPiece < Piece
  include Singleton
end

