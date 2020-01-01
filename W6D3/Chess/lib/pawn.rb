require_relative 'slideable'
require_relative "piece"

class Pawn < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
  end


  def symbol
    :P
  end
end