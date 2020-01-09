class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    new_hash = 0
    return 0.hash if self.empty?

    self.each_with_index { |el, i| new_hash = (el.hash + i.hash) ^ new_hash }
    new_hash
  end
end

class String
  def hash
    
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
