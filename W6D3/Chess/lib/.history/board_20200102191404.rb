require "byebug"
require_relative "piece"
require 'colorize'

class Board
  attr_reader :board

  def initialize
    @board = Array.new
    fill_board
  end

  def render
    (0...@board.length).each { |i|
      color = i < 2 ? :white : :light_black
      puts @board[i].map { |pos| pos.to_s.colorize(color) }.join(" ")
    }
  end

  def fill_board
    @board.concat(Array.new(8) { |i| 
      Array.new(8) { |j| 
        if (2..5).include?(i)
          NullPiece.instance
        else
          color = i < 2 ? :W : :B
          if i == 1 || i == 6
            Pawn.new(color, self, [i, j])
          else
            case j
            when 7, 0
              Rook.new(color, self, [i,j])
            when 1, 6
              Knight.new(color, self, [i,j])
            when 2, 5
              Bishop.new(color, self, [i,j])
            when 3
              King.new(color, self, [i,j])
            when 4
              Queen.new(color, self, [i,j])
            end
          end
        end
      } 
    })
  end

  def [](pos)
    x, y = pos
    debugger if x.nil? || y.nil?
    @board[x][y]
  end

  def []=(pos, value)
    x, y = pos
    @board[x][y] = value
    @board[x][y].pos = pos
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece here" unless !self[start_pos].is_a?(NullPiece) && 
      self[start_pos].is_a?(Piece)
    # raise "Illegal move detected" unless self[start_pos].moves.include?(end_pos)
    if self[end_pos].is_a?(NullPiece)
      self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
    else 
      self[end_pos], self[start_pos] = self[start_pos], NullPiece.instance
    end
  end

  def valid_pos?(pos)
    return false unless pos.all? { |ele| ele >= 0 && ele <= 7 }
    true
  end
end
