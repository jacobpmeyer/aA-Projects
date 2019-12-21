

class Board

  attr_reader :size

  def intialize(size)
    @grid = Array.new(size) { Array.new(size) }
    @size = size
  end

  def [](pos)
    row, col = pos
    self.grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    self.grid[row][col] = val
  end

  def place_bombs
    until bomb_count == 10
      (0...size
    end
  end

  def valid_pos?
    if self[pos] == ""
  end

  def bomb_count
    self.grid.flatten.count { |ele| ele == "B" }
  end

  def render
    puts "    #{(0...9).to_a.join(' ')}"
    puts "   ------------------"
    @grid.each_with_index do |row, i|
      puts "#{i} | #{row.join(" ")}"
    end
    puts "   ------------------"
  end

end