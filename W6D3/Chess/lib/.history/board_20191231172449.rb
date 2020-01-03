require_relative "piece"

class Board
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

    # (0..7).times { |i|
    #   (0..7).times { |j|
        
    #   }
    # }
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece here" if @board[start_pos].is_a?(NullPiece)
    
    unless @board[start_pos].legal_moves.include?(end_pos)
      raise "Illegal move detected" 
    end

    @board[end_pos], @board[start_pos] = @board[start_pos], @board[end_pos]
  end 
end