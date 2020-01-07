def bad_two_sum?(arr, target)
  (0...arr.length - 1).each do |i|
    (i + 1...arr.length).each do |j|
      return true if arr[i] + arr[j] == target
    end
  end
  false
end
# Time complexity => O(n^2)
# Space complexity => O(1)

def okay_two_sum?(arr, target)
  arr.sort!
  pairs = arr.combination(2)
  pairs.any? { |pair| pair.sum == target }
end

# Time complexity => O(n^2)
# Space complexity => O(nlog(n))

def two_sum?(arr, target)
    hash = Hash.new(0)
    arr.each do |ele|
        hash[ele] += 1
    end
    arr.each do |ele|
        dif = target - ele
        if hash[dif] && (dif != ele || hash[dif] >= 2 )
        # if hash.include?(dif) && (dif != ele || hash[dif] >= 2 ) 
            return true 
        end
    end
    false
end
# Time complexity => O(n)
# Space complexity => O(n)

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false