class HanoiGame

  attr_reader :board

  def initialize
    @board = [[3, 2, 1],[],[]]
  end

  def prompt
    puts 'enter a position to select a disc and a position to drop the disc (example: 3 1)'
    gets.chomp.split.map { |ele| ele.to_i - 1 }
  end

  def move
    from, to = self.prompt
    unless @board[to].empty? 
        raise ArgumentError if @board[from].last > @board[to].last
    end
    @board[to] << @board[from].pop
  end

  def won?
    arr = [3, 2, 1]
    @board[1] == arr || @board[2] == arr
  end

end