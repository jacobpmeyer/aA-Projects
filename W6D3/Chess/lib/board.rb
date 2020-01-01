require_relative "piece"
require 'byebug'

class Board

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    fill_board
  end

  def fill_board
    (0...@rows.length).each do |i|
      (0...@rows.length).each do |j|
        pos = [i, j]
        if (2..5).include?(i)
          self[pos] = NullPiece.instance
        else
          self[pos] = Piece.new
        end
      end
    end
  end

  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @rows[row][col] = value
  end

  def pieces

  end

  def move_piece(start_pos, end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end


end