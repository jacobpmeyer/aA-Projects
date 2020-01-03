require "byebug"
require 'singleton'
require_relative 'movement_modules'

class Piece
  attr_accessor :pos
  attr_reader :color, :board

  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
  end

  def inspect
    @symbol
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
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :K
  end

  def move_diffs
    [[0, 1], [0, -1], [-1, 0], [1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]]
  end
end

class Pawn < Piece
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :P
  end

  def moves
    mvs = super
    mvs.select { |pos| self.board[pos].color != self.color }

  end

  def move_diffs
    moves = []
    mds = move_dirs #[-1,0]
    
    dirs = [1,-1]
    dirs.each { |dir|
      moves << [mds[0], dir]
    }
    moves
  end

  def move_dirs
    if color == "white"
      [-1,0]
    else
      [1,0]
    end
  end
end

class Knight < Piece
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :N
  end

  def move_diffs
    [[2,1], [2,-1], [-2,1], [-2,-1], [-1,2], [-1,-2], [1,2], [1,-2]]
  end
end

class NullPiece < Piece
  include Singleton

  def initialize()
    @symbol = :U
    @color = "clear"
  end

  def inspect 
    @symbol
  end

  def to_s
    " "
  end
end

