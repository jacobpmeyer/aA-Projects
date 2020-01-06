
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

def largest_contiguous_subsum(list)
  arr = []
  list.each_with_index do |el1, i|
    list.each_with_index do |el2, j|
       if j > i
        arr << list[i..j]
       end
    end
  end
  largest_sum = 0
  arr.each do |sub_arr|
    largest_sum = sub_arr.sum if sub_arr.sum > largest_sum
    # p sub_arr
  end
  largest_sum
end
# Time complexity => O(n^2)

# list = [5, 3, -7]
# p largest_contiguous_subsum(list) # => 8

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])