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
    @symbol = "R"
  end

  def move_dirs
    horizontal_dirs
  end
end

class Bishop < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = "B"
  end

  def move_dirs
    diagonal_dirs
  end
end

class Queen < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = "Q"
  end
end

class King < Piece
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = "K"
  end

  def move_diffs
    [[0, 1], [0, -1], [-1, 0], [1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]]
  end
end

class Pawn < Piece
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = "P"
  end

  def moves
    mvs = super 
    return mvs if mvs.empty?
    # P[1,1]
    # mvs = [[2,1], [2,0], [2,-1]]

    mvs2 = []
    first = mvs.shift
    mvs2 << first if self.board[first].is_a?(NullPiece)

    # unless self.board[mvs[0]].is_a?(NullPiece)
    #   mvs.shift
    # end
    enemy = Proc.new { |pos| self.board[pos].color != self.color && 
      !self.board[pos].is_a?(NullPiece) }

    mvs.each { |mv| 
      mvs2 << mv if enemy.call(mv)
    }

    mvs2
  end

  def move_diffs
    moves = []
    moves << move_dirs #[-1,0]
    
    dirs = [1,-1]
    dirs.each { |dir|
      moves << [moves[0][0], dir]
    }
    moves
  end

  def move_dirs
    if self.color == :W
      [1,0]
    else
      [-1,0]
    end
  end
end

class Knight < Piece
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = "N"
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

