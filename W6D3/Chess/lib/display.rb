require_relative "cursor"

class Display

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], @board)
  end

  def render
    (0...@board.length).each do |i|
      color = i < 2 ? :white : :light_black
      puts @board[i].map { |pos| pos.to_s.colorize(color) }.join(' ')
    end
  end

end