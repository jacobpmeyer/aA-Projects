require "byebug"
require 'singleton'
require_relative 'movement_modules'

class Piece
  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
  end

  def to_s
    @symbol
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

class Rook
  def initialize
    
  end
end

class Bishop
  def initialize
    
  end
end

class Queen
  def initialize
    
  end
end


