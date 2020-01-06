
# my_min
# phase 1

def my_min1(list)
    (0...list.length).each do |i|
        return list[i] if list.all? { |el| el >= list[i] }
    end
end
# time complexity => O(n^2)

#phase 2

def my_min2(list)
  min = 0
  list.each do |el|
    min = el if el < min
  end
  min
end
# time complexity => O(n)

# examples
# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)
# p my_min2(list)


# largest_contiguous_subsum
# phase 1

def largest_contiguous_subsum1(list)
  arr = []
  (0...list.length).each do |i|
    (i...list.length).each { |j| arr << list[i..j] }
  end
  largest_sum = arr.first.sum
  arr.each do |sub_arr|
    largest_sum = sub_arr.sum if sub_arr.sum > largest_sum
  end
  largest_sum
end
# Time complexity => O(n^2)

def largest_contiguous_subsum2(list)
  sum = 0 # keeps track of current sum
  largest_sum = list.first # evaluates to the largest sum
  list.each do |ele|
    sum += ele 
    largest_sum = sum if sum > largest_sum
    sum = 0 if sum < 0
  end
  largest_sum
end
# Time complexity => O(n)

# examples
# list = [5, 3, -7]
# p largest_contiguous_subsum1(list) # => 8

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum2(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p largest_contiguous_subsum2(list) # => -1 (from [-1])