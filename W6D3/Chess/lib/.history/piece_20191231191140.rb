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
end

class Bishop < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :B
  end

  def move_dirs
end

class Queen < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :Q
  end

  def move_dirs
end

class NullPiece < Piece
  include Singleton

  def initialize

  end
end

