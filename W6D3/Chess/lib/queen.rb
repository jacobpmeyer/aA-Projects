require_relative 'slideable'
require_relative 'piece'

class Queen < Piece
  include Slideable
  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :Q
  end
end