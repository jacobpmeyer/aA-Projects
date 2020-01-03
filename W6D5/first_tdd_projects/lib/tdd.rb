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
end

def stock_picker(arr)
    profit = 0
    new_arr = nil
    arr.each_with_index do |ele1, i|
      arr.each_with_index do |ele2, j|
        if j > i
          new_profit = ele2 - ele1
          if new_profit > profit
            profit = new_profit 
            new_arr = [i, j]
          end
        end
      end
    end
    new_arr
end

