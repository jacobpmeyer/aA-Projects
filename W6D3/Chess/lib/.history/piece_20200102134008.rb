require "byebug"
require 'singleton'
require_relative 'movement_modules'

class Piece
  attr_writer :pos
  attr_reader :color, :board

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

class Rook < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :R
  end

  def move_dirs
    horizontal_dirs
  end
end

class Bishop < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :B
  end

  def move_dirs
    diagonal_dirs
  end
end

class Queen < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :Q
  end
end

class King < Piece

  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :K
  end
end

class NullPiece < Piece
  include Singleton

  def initialize()
    @symbol = :N
    @color = "clear"
  end

  def inspect 
    @symbol
  end

  def to_s
    " "
  end
end

