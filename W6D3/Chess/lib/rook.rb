require_relative 'slideable'
require_relative "piece"

class Rook < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
  end
  
  def symbol
    :R
  end
end