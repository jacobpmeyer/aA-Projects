require "colorize"
require "byebug"
require_relative "tile"
require_relative "board"

class Minesweeper

  attr_accessor :grid

  def self.new_game
    Minesweeper.new
  end

  def initialize(size = 9)
    @grid = Board.new(size)
  end
  
  def render
    self.board.render
  end

end

if $PROGRAM_NAME == __FILE__
  game = Minesweeper.new
  game.run
end