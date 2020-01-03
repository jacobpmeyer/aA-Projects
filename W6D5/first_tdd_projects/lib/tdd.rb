class Array
  def my_uniq
    arr = []
    self.each { |ele| arr << ele if !arr.include?(ele) }
    arr
  end

  def two_sum
    new_arr = []
    (0...self.length - 1).each do |i|
        (i + 1...self.length).each do |j|
            sum = self[i] + self[j]
            new_arr << [i, j] if sum == 0
        end
    end
    new_arr
  end

  def my_transpose
    self.transpose
  end

  def stock_picker(arr)
    
  end
end