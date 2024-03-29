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

  def moves
    pizza_moves = []
    move_dirs.each do |dir|
      next_piece = [pos[0] + dir[0], pos[1] + dir[1]]
      next unless board.valid_position(next_piece)
    end
    pizza_moves
  end

  def move_dirs
    horizontal_dirs#.map { |delta| [pos[0] + delta[0], pos[1] + delta[1]] }
  end
end

class Bishop < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :B
  end

  def move_dirs
    diagonal_dirs#.map { |delta| [pos[0] + delta[0], pos[1] + delta[1]] }
  end
end

class Queen < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :Q
  end

  def move_dirs
    
  end
end

class NullPiece < Piece
  include Singleton

  def initialize

  end
end


module NewModule
  class << self
    def included(child)
      child.instance_variable_set(:@test, "test")

      # child.define_method :test do |*args|
      #   puts self
      #   self.instance_variable_set(:@test, "test")
      #   # super
      # end
    end

  end
end

class NewClass
  # include NewModule
  # extend NewModule
  def initialize
    @class = true

    class << self 
      include NewModule
    end

  end
end

c = NewClass.new
NewClass.instance_variables
c.singleton_class.instance_variables
