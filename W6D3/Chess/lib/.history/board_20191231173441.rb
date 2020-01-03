require_relative "piece"

class Board
  attr_reader :board

  def initialize
    @board = fill_board
    
    
  end

  def fill_board
    Array.new(8) { |i| 
      Array.new(8) { |j| 
        if (2..5).include?(i)
          nil
        else
          Piece.new(i, j)
        end
      } 
    }
  end



  def [](x,y)
    @board[x][y]
  end

  def []=(x,y,z)
    @board[x][y] = z
  end

  def move_piece(start_pos, end_pos)
    # start_pos = [1,2]
    raise "There is no piece here" if self[start_pos].is_a?(NullPiece)
    
    unless @board[start_pos].legal_moves.include?(end_pos)
      raise "Illegal move detected" 
    end

    @board[end_pos], @board[start_pos] = @board[start_pos], @board[end_pos]
  end 
end

class Array
  def []=(x,y)

  end
end

[x] = y