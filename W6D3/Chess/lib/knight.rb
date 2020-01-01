require_relative 'stepable'
require_relative "piece"

class Knight < Piece
  include Stepable
  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :S
  end
end