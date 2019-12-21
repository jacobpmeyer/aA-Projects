

class Tile

  attr_reader :value
  
  def initialize
    @value = "*"
  end

  def inspect
    "Tile = #{self.value}"
  end

  def make_bomb
    @value = "$"
  end

end