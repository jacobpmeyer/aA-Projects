require_relative 'slideable'
require_relative "piece"

class Bishop < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :B
  end
end