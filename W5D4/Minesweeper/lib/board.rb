

class Board

  attr_reader :size, :grid

  def initialize(size = 9)
    @size = size
    @grid = Array.new(size) { Array.new(size) }
    populate
  end

  def [](pos)
    row, col = pos
    self.grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    self.grid[row][col] = val
  end

  def populate
    make_tiles  
    # place_bombs
  end
  
  def make_tiles  
    (0...self.size).each do |row|
      (0...self.size).each do |col|
        pos = [row, col]
        self[pos] = Tile.new
      end
    end
  end
  
  def place_bombs
    until self.bomb_count == 10
      pos = [rand(0...self.size), rand(0...self.size)]
      self[pos].make_bomb
    end
  end

  def valid_pos?
    if self[pos] == ""
    end
  end

  def bomb_count
    self.grid.flatten.count { |ele| ele.value == "$" }
  end

  def render
    puts "    #{(0...9).to_a.join(' ')}"
    puts "   ------------------"
    @grid.each_with_index do |row, i|
      puts "#{i} | #{row.map{ |ele| ele.value }.join(" ")}"
    end
    puts "   ------------------"
  end

  def inspect
    "Board of size #{size}"
  end

end